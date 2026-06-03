import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export const initializeDatabase = async () => {
  const db = await open({
    filename: path.join(
      process.cwd(),
      "src",
      "data",
      "database",
      "vulnerable-lab.db"
    ),
    driver: sqlite3.Database,
  });

  return db;
};