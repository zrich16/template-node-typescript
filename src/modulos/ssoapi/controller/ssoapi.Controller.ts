import { Request, Response } from "express";

import logger from '../../../logger/logger';


/**
 * Controlador de prueba para validación de conexión del API.
 *
 * @async
 * @function testssoap
 *
 * @param {Request} req - Objeto de solicitud HTTP de Express.
 * @param {Response} res - Objeto de respuesta HTTP de Express.
 *
 * @description
 * Método utilizado para verificar la disponibilidad y correcta 
 * conexión del servicio SSO API.
 *
 * @returns {Promise<void>} Retorna una respuesta JSON con el estado de la operación.
 *
 * @example
 * // Response exitosa (200)
 * {
 *   "success": true,
 *   "data": "ssoapi.Controller : testssoap",
 *   "message": "OK"
 * }
 *
 * @example
 * // Response de error (500)
 * {
 *   "success": false,
 *   "data": null,
 *   "message": "Mensaje de error"
 * }
 *
 * @throws {Error} Retorna código HTTP 500 si ocurre un error inesperado.
 */
export const testssoap = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    logger.info("ssoapi.Controller : testssoap");

    res.status(200).json({
      success: true,
      data: "ssoapi.Controller : testssoap",
      message: "OK",
    });

  } catch (error: any) {
    logger.error(`ssoapi.Controller : testssoap - ${error.message}`);

    res.status(500).json({
      success: false,
      data: null,
      message: error.message,
    });
  }
};

