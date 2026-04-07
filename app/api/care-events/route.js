// POST /api/care-events — insert a care event
import { NextResponse } from 'next/server';
import getDb from '../../../lib/db.js';

export async function POST(req) {
  try {
    const { plant_id, event_date, event_type, note } = await req.json();
    if (!plant_id || !event_date || !event_type) {
      return NextResponse.json({ error: 'plant_id, event_date, and event_type are required' }, { status: 400 });
    }
    const sql = getDb();
    const [row] = await sql`
      INSERT INTO care_events (plant_id, event_date, event_type, note)
      VALUES (${plant_id}, ${event_date}, ${event_type}, ${note || ''})
      RETURNING *
    `;
    return NextResponse.json(row);
  } catch (err) {
    console.error('[POST /api/care-events]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
