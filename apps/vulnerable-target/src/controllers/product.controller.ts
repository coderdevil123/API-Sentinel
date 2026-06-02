import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

const productService = new ProductService();

export class ProductController {
  async getProducts(req: Request, res: Response) {
    const products = await productService.getAllProducts();

    res.status(200).json({
      success: true,
      data: products,
    });
  }
  async searchProducts(req: Request, res: Response) {
    const query = String(req.query.q || "");

    const suspiciousPatterns = [
      "'",
      "--",
      ";",
      "union",
      "select",
      "drop",
      "or 1=1"
    ];

    const lowerQuery = query.toLowerCase();

    const isSuspicious = suspiciousPatterns.some(pattern =>
      lowerQuery.includes(pattern)
    );

    if (isSuspicious) {
      console.log(
        "[VULNERABILITY] Simulated SQL Injection payload detected"
      );

      return res.status(500).json({
        success: false,
        error: "SQLITE_ERROR: simulated database exception",
        indicator: "Potential SQL Injection"
      });
    }

    const products = await productService.searchProducts(query);

    return res.status(200).json({
      success: true,
      data: products
    });
  }
}