import { Request, Response } from "express";
import { getAllUsers } from "../service/user.service";

export const getAllUsersController = async (req: Request,res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error interno" });
  }
};