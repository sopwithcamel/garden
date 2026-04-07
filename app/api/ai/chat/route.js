// POST /api/ai/chat — general garden chat with Claude.
// Accepts { message, history, plantIndex } where:
//   history: last N conversation turns [{role, content}]
//   plantIndex: compact one-liner per plant (generated client-side, ~200 tokens)
//
// Full plant detail is NOT sent in every request — only the compact index.
// If the user's question references specific plants, the client enriches plantIndex
// with full details for those plants before calling this endpoint.
import { NextResponse } from 'next/server';

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';

export async function POST(req) {
  try {
    const apiKey = process.env.CLAUDE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'CLAUDE_API_KEY is not configured on the server.' }, { status: 503 });
    }

    const { message, history = [], plantIndex = '' } = await req.json();
    if (!message) {
      return NextResponse.json({ error: 'message is required' }, { status: 400 });
    }

    const systemPrompt = `You are a knowledgeable and friendly garden assistant for the Amur family home garden. You have access to the family's plant collection shown below. Be concise but helpful. If asked about a specific plant's details and you don't have them in the context, acknowledge that and give general advice.\n\nGarden plant index:\n${plantIndex}`;

    // Limit history to last 8 turns to control token usage
    const trimmedHistory = history.slice(-8);

    const messages = [
      ...trimmedHistory,
      { role: 'user', content: message },
    ];

    const resp = await fetch(ANTHROPIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return NextResponse.json({ error: `Claude API error: ${resp.status} ${errText}` }, { status: 502 });
    }

    const data = await resp.json();
    const reply = data.content?.[0]?.text || '';

    return NextResponse.json({ reply });
  } catch (err) {
    console.error('[POST /api/ai/chat]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
