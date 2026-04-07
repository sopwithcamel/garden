// POST /api/photos — insert photo metadata (after Supabase Storage upload)
// DELETE /api/photos — delete photo metadata (Supabase Storage deletion handled client-side)
import { NextResponse } from 'next/server';
import getDb from '../../../lib/db.js';

export async function POST(req) {
  try {
    const { plant_id, storage_path, public_url, photo_date } = await req.json();
    if (!plant_id || !storage_path || !public_url || !photo_date) {
      return NextResponse.json({ error: 'plant_id, storage_path, public_url, and photo_date are required' }, { status: 400 });
    }
    const sql = getDb();
    const [row] = await sql`
      INSERT INTO photos (plant_id, storage_path, public_url, photo_date)
      VALUES (${plant_id}, ${storage_path}, ${public_url}, ${photo_date})
      RETURNING *
    `;
    return NextResponse.json(row);
  } catch (err) {
    console.error('[POST /api/photos]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 });
    const sql = getDb();
    await sql`DELETE FROM photos WHERE id = ${id}`;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[DELETE /api/photos]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
