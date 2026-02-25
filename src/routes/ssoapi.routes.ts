import { Router } from "express";
import { testssoap

} from "../modulos/ssoapi/controller/ssoapi.Controller";
const router = Router();

/**
 * @swagger
 * /testssoap:
 *   get:
 *     summary: Prueba de conexión API SSO
 *     description: Método para validar conexión de la API
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: string
 *                 message:
 *                   type: string
 *       500:
 *         description: Error interno del servidor
 */
router.get("/testssoap", testssoap);

export default router;