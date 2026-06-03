import { Request, Response } from "express";

export class AdminController {
  async getAdminPanel(req: Request, res: Response) {
    console.log(
      "[VULNERABILITY] Broken Authentication endpoint accessed"
    );

    res.status(200).json({
      success: true,
      data: {
        adminPanel: true,
        secretKey: "SUPER_SECRET_ADMIN_KEY",
        environment: "production",
        usersCount: 3,
      },
    });
  }
}