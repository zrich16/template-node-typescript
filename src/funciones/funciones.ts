

import { Buffer } from 'buffer';
import { EfirmaParam } from '../interface/EfirmaParam';
import { z } from "zod";


/**
 * Convierte los campos a base64.
 *
 * @async
 * @function conveertirBase64
 * @param {cadena} param - cadena a convertir a base64.
 * @returns {Promise<string>} 
 *          cadena convertida en base64
 *
 * @author  @rich-develop
 */
export const conveertirBase64 = async (cadena: any) => {

    try {
        const buffer = Buffer.from(cadena, 'utf8');
        const cadenaBase64 = buffer.toString('base64');

        return cadenaBase64;
    } catch (error) {
        return null;
    }
}

/**
 * Valida los campos necesarios para procesar una e-firma.
 *
 * @async
 * @function validacionesCamposeFirma
 * @param {EfirmaParam} param - Objeto con los datos de la e-firma a validar.
 * @returns {Promise<SafeParseReturnType<EfirmaParam, EfirmaParam>>} 
 *          Resultado de la validación: `success` indica si es válido, `data` contiene los datos validados,
 *          `error` contiene los errores de validación si los hay.
 *
 * @author  @rich-develop
 */
export const validacionesCamposeFirma = async (param: EfirmaParam) => {

    try {
        const efirmsSchema = z.object({
            byteCer: z.string().nonempty("El cdertificado es obligatorio"),
            byteKey: z.string().nonempty("El key es obligatorio"),
            password: z.string().nonempty("El password es obligatorio"),
            cadena: z.string().nonempty("La cadena es obligatorio"),
        });

        return efirmsSchema.safeParse(param);
    } catch (error) {
        return null;
    }
}

