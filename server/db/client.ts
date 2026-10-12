import "server-only";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { serverConfig } from "@/server/config";
import * as schema from "./schema";

type Database = ReturnType<typeof createDb>;

function createDb(url: string) {
  // Small pool: each serverless instance should hold few connections.
  return drizzle(postgres(url, { max: 3, prepare: false }), { schema });
}

let db: Database | null | undefined;

/** Returns the database, or null when DATABASE_URL is not configured. */
export function getDb(): Database | null {
  if (db === undefined) {
    db = serverConfig.databaseUrl ? createDb(serverConfig.databaseUrl) : null;
  }
  return db;
}
