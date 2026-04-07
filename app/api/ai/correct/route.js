// POST /api/ai/correct — send plant data + correction prompt to Claude,
// return structured updates. Claude API key stays server-side.
import { NextResponse } from 'next/server';

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';

export async function POST(req) {
  try {
    const apiKey = process.env.CLAUDE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'CLAUDE_API_KEY is not configured on the server.' }, { status: 503 });
    }

    const { plant, correction } = await req.json();
    if (!plant || !correction) {
      return NextResponse.json({ error: 'plant and correction are required' }, { status: 400 });
    }

    const systemPrompt = `You are a helpful plant-care assistant. The user will describe a correction or update they want to make to a plant profile. Return ONLY a valid JSON object (no markdown fences, no explanation) with the fields that should change. Allowed fields: commonName, scientificName, nickname, healthStatus, age, sunlight, watering, waterFreq, fertilizer, fertFreq, soil, seasonNote, notes, recs (array of strings), tasks (array of {t:string, p:"urgent"|"high"|"medium"|"low"}). Only include fields that actually change.`;

    const userMessage = `Current plant data:\n${JSON.stringify(plant, null, 2)}\n\nCorrection request: ${correction}`;

    const resp = await fetch(ANTHROPIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 2048,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return NextResponse.json({ error: `Claude API error: ${resp.status} ${errText}` }, { status: 502 });
    }

    const data = await resp.json();
    const raw = data.content?.[0]?.text || '';

    // Strip any accidental markdown fences
    const cleaned = raw.replace(/^```[a-z]*\n?/i, '').replace(/\n?```$/i, '').trim();

    let updates;
    try {
      updates = JSON.parse(cleaned);
    } catch {
      return NextResponse.json({ error: 'Claude returned invalid JSON', raw }, { status: 502 });
    }

    return NextResponse.json({ updates });
  } catch (err) {
    console.error('[POST /api/ai/correct]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
