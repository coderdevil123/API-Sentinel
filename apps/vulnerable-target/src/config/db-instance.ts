import { initializeDatabase } from "./database";

let databaseInstance: any = null;

export const getDatabase = async () => {
  if (!databaseInstance) {
    databaseInstance = await initializeDatabase();
  }

  return databaseInstance;
};