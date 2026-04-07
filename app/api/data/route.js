// GET /api/data — returns all plant_settings, care_events, photos, user_plants
import { NextResponse } from 'next/server';
import getDb from '../../../lib/db.js';

export async function GET() {
  try {
    const sql = getDb();
    const [settings, careEvents, photos, userPlants] = await Promise.all([
      sql`SELECT * FROM plant_settings`,
      sql`SELECT * FROM care_events ORDER BY created_at ASC`,
      sql`SELECT * FROM photos ORDER BY created_at ASC`,
      sql`SELECT * FROM user_plants ORDER BY created_at ASC`,
    ]);
    return NextResponse.json({ settings, careEvents, photos, userPlants });
  } catch (err) {
    console.error('[GET /api/data]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
