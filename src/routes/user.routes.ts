import { Router } from "express";
import { getAllUsersController } from "../modulos/test/controller/user.controller";

const router = Router();

router.get("/getAllUsers", getAllUsersController);

export default router;