import { Router }
from "express";

import {
  ScanController
}
from "../controllers/scan.controller";

const router =
  Router();

const controller =
  new ScanController();

router.post(
  "/scan",
  controller.createScan
    .bind(controller)
);

export default router;