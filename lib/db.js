// postgres.js singleton — reused across Vercel serverless invocations
import postgres from 'postgres';

let sql;

function getDb() {
  if (!sql) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set.');
    }
    // SSL: default false for home/self-hosted Postgres; set DATABASE_SSL=true to enable
    const sslOpt = process.env.DATABASE_SSL === 'true'
      ? { rejectUnauthorized: false }
      : false;

    sql = postgres(connectionString, {
      max: 5,            // connection pool limit (safe for serverless)
      idle_timeout: 20,  // close idle connections after 20s
      connect_timeout: 10,
      ssl: sslOpt,
    });
  }
  return sql;
}

export default getDb;
