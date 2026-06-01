import { getDatabase } from "../config/db-instance";

export class ProductService {
  async getAllProducts() {
    const db = await getDatabase();

    return db.all(`
      SELECT *
      FROM products
    `);
  }

  async searchProducts(query: string) {
    const db = await getDatabase();

    return db.all(
      `
      SELECT *
      FROM products
      WHERE name LIKE ?
    `,
      [`%${query}%`]
    );
  }
}