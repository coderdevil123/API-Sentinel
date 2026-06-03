import { initializeDatabase } from "./database";
import { loadSeedFile } from "../utils/seed-database";

export const bootstrapDatabase = async () => {
  const db = await initializeDatabase();

  const seedSql = loadSeedFile();

  await db.exec(seedSql);

  console.log("[INFO] Database initialized");

  return db;
};