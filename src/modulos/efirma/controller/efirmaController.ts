import { Request, Response } from "express";
import { efirmaService } from "../service/efirmaService";


/**
 * Controlador para manejar solicitudes de efirma.
 *
 * @async
 * @function efirma
 * @param {Request} req - Objeto de solicitud de Express que contiene los datos en req.body.
 * @param {Response} res - Objeto de respuesta de Express para enviar la respuesta al cliente.
 *
 * @description
 * Este método recibe los datos enviados en el cuerpo de la solicitud, los pasa al servicio `efirmaService`
 * y devuelve al cliente la respuesta según el resultado del servicio.
 * 0 => Firma Electrónica realizada con exito
 * 1 => Error al validar la firma
 *
 * @returns {Promise<void>} No retorna valor, pero envía una respuesta HTTP al cliente:
 *  - 200 con el resultado si el servicio fue exitoso.
 *  - 400 con el resultado si hubo fallo en la lógica del servicio.
 *  - 500 en caso de error interno del servidor.
 * 
 * @author @rich-develop
 */
export const efirma = async (req: Request, res: Response) => {
  try {
    const param = req.body; 
    const result = await efirmaService(param); 

    res.status(result.success ? 200 : 400).json(result);
  } catch (error: any) {
    res.status(500).json({ success: false, data: null, message: error.message || "Error interno efirmaController" });
  }
};
