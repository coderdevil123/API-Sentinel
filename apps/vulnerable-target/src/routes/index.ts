import { Router } from "express";

import adminRoutes from "./admin.routes";
import userRoutes from "./user.routes";
import productRoutes from "./product.routes";

const router = Router();

router.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    service: "vulnerable-target",
    version: "v1",
    status: "healthy",
  });
});

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/admin", adminRoutes);

export default router;