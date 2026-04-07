// POST /api/plants — insert a custom user plant
import { NextResponse } from 'next/server';
import getDb from '../../../lib/db.js';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      id, common_name, scientific_name, location, emoji,
      category, edible, sunlight, watering, fertilizer,
      fert_freq, soil, notes,
    } = body;

    if (!id || !common_name || !location) {
      return NextResponse.json({ error: 'id, common_name, and location are required' }, { status: 400 });
    }

    const sql = getDb();
    await sql`
      INSERT INTO user_plants (
        id, common_name, scientific_name, location, emoji,
        category, edible, sunlight, watering, fertilizer,
        fert_freq, soil, notes
      ) VALUES (
        ${id}, ${common_name}, ${scientific_name || ''},
        ${location}, ${emoji || '🌱'}, ${category || ''},
        ${edible ?? false}, ${sunlight || ''}, ${watering || ''},
        ${fertilizer || ''}, ${fert_freq || ''}, ${soil || ''},
        ${notes || ''}
      )
    `;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[POST /api/plants]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
