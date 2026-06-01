import { Router } from "express";

const router = Router();

router.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    service: "vulnerable-target",
    version: "v1",
    status: "healthy",
  });
});

export default router;