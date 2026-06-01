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
}