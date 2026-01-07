import { Router } from "express";
import userRoutes from "./user.routes";
import efirmaRoutes from "./efirma.routes";

const router = Router();

// Se agregan todos los routers de módulos
router.use("/api/users", userRoutes);
router.use("/api/efirma", efirmaRoutes);

export default router;
