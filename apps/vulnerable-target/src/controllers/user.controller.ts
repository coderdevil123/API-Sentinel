import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  async getUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  }

  async getUser(req: Request, res: Response) {
    const id = Number(req.params.id);

    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Intentionally vulnerable
    console.log(
      `[VULNERABILITY] BOLA endpoint accessed: user ${id}`
    );

    res.status(200).json({
      success: true,
      data: user,
    });
  }
}