import { getDatabase } from "../config/db-instance";

export class UserService {
  async getAllUsers() {
    const db = await getDatabase();

    return db.all(`
      SELECT id, name, email, role
      FROM users
    `);
  }

  async getUserById(id: number) {
    const db = await getDatabase();

    return db.get(
      `
      SELECT *
      FROM users
      WHERE id = ?
    `,
      [id]
    );
  }
}