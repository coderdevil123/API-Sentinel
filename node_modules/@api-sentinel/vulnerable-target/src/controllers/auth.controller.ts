import { Request, Response } from "express";

export class AuthController {
  async login(req: Request, res: Response) {
    console.log(
      "[VULNERABILITY] Login endpoint accessed without rate limiting"
    );

    const { username } = req.body;

    res.status(200).json({
      success: true,
      message: "Login attempted",
      username,
      warning: "No rate limiting configured"
    });
  }
}