
import logger from '../../../logger/logger';


import { EfirmaParam } from '../../../interface/EfirmaParam';
import { conveertirBase64, validacionesCamposeFirma } from '../../../funciones/funciones';

/**
 * Servicio que procesa la e-firma.
 *
 * @async
 * @function efirmaService
 * @param {EfirmaParam} param - Objeto con los datos necesarios para la e-firma.
 * @returns {Promise<{success: boolean, data: any, message: string}>} Resultado del proceso de firma.
 *
 * @description
 * Valida los campos necesarios de la solicitud mediante `validacionesCamposeFirma`.
 * Si los datos son válidos, convierte los valores a Base64 y retorna éxito.
 * En caso de error en la validación o en el proceso, retorna un objeto con success: false
 * y mensajes de error claros.
 *
 * 
 * @author @rich-develop
 */
export const efirmaService = async (param: EfirmaParam) => {
    let data;
    try {
        logger.info(`Servicio   efirmaService `);

        const validacioneFirma = await validacionesCamposeFirma(param);

        if (!validacioneFirma?.success) {
            const errors = validacioneFirma?.error.format();
            return {
                success: false,
                data: errors,
                message: "Datos inválidos en la solicitud"
            };
        } else {
            const base64Cert = await conveertirBase64(param.byteCer);
            const base64Key = await conveertirBase64(param.byteKey);
            const base64pass = await conveertirBase64(param.password);

            return {
                success: true,
                data: param,
                message: "EFirma ejecutado correctamente"
            };
        }

    } catch (error: any) {
        logger.error(`Service: efirmaService - ${error.message}`);
        return {
            success: false, data: null, message: `Service: efirmaService - ${error.message}`
        };
    }

};