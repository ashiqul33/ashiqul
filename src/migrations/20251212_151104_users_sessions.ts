import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;

    CREATE TABLE IF NOT EXISTS users_sessions (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      _order INTEGER,
      created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
      expires_at TIMESTAMP WITHOUT TIME ZONE,
      _parent_id INTEGER REFERENCES users(id)
    );
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE users_sessions CASCADE;
  `)
}
