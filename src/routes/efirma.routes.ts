import { Router } from "express";
import { efirma } from "../modulos/efirma/controller/efirmaController";

const router = Router();

router.post("/efirma", efirma);

export default router;