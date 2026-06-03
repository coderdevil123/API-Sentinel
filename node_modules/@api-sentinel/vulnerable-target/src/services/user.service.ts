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

  async createUser(userData: any) {
    const db = await getDatabase();

    const result = await db.run(
      `
      INSERT INTO users
      (
        name,
        email,
        password_hash,
        role,
        internal_notes
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        userData.name,
        userData.email,
        "default_hash",
        userData.role,
        "Created via API"
      ]
    );

    return result;
  }
}