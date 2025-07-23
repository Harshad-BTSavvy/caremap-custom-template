import { tables } from "@/services/database/migrations/v1/schema_v1";
import { logger } from "@/services/logging/logger";
import { SQLiteDatabase } from "expo-sqlite";

export const up = async (db: SQLiteDatabase) => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS ${tables.USER} (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL
    );
  `);

  logger.debug(`Tables created for V1.`);
};