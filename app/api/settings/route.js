// PUT /api/settings — upsert plant_settings for a given plant_id
// Only fields present in the request body are updated; others keep their current values.
import { NextResponse } from 'next/server';
import getDb from '../../../lib/db.js';

export async function PUT(req) {
  try {
    const body = await req.json();
    const { plant_id } = body;
    if (!plant_id) {
      return NextResponse.json({ error: 'plant_id is required' }, { status: 400 });
    }

    const sql = getDb();

    // Map from request body keys → DB column names
    const colMap = {
      nickname:        'nickname',
      health_status:   'health_status',
      age:             'age',
      date_planted:    'date_planted',
      last_watered:    'last_watered',
      last_fertilized: 'last_fertilized',
      sunlight:        'sunlight',
      watering:        'watering',
      fertilizer:      'fertilizer',
      fert_freq:       'fert_freq',
      soil:            'soil',
      water_freq:      'water_freq',
      recs:            'recs',
      tasks:           'tasks',
      season_note:     'season_note',
      notes:           'notes',
    };

    // Build the delta object — only include keys present in body
    const delta = { updated_at: new Date() };
    for (const [bodyKey, colName] of Object.entries(colMap)) {
      if (bodyKey in body) {
        delta[colName] = body[bodyKey];
      }
    }

    // Check if row exists
    const existing = await sql`SELECT plant_id FROM plant_settings WHERE plant_id = ${plant_id}`;

    if (existing.length > 0) {
      // UPDATE only the provided columns
      await sql`UPDATE plant_settings SET ${sql(delta)} WHERE plant_id = ${plant_id}`;
    } else {
      // INSERT new row with provided columns + plant_id
      await sql`INSERT INTO plant_settings ${sql({ plant_id, ...delta })}`;
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[PUT /api/settings]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
