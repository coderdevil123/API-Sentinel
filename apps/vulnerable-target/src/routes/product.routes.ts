import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const router = Router();
const controller = new ProductController();

router.get("/", controller.getProducts);
router.get("/search", controller.searchProducts);

export default router;