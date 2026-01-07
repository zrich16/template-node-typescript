
import logger from '../../../logger/logger';
import { EfirmaParam } from '../../../interface/EfirmaParam';

export const generarSello = async (byteCert: string, byteKey: string, pwd: string, cadena: string, username: string) => {
    try {
        logger.info(`Param   certificado  - ${byteCert}`);
        logger.info(`Param   key  - ${byteKey}`);
        logger.info(`Param   Password  - ${pwd}`);
        logger.info(`Param   Cadena  - ${cadena}`);
        logger.info(`Param   username  - ${username}`);


        const dataeFirma = await consumeOcspSat(byteCert, "rfc");
        
        if(dataeFirma){

        }else{
            return {
            success: false, data: null, message: `Certificado invalido. - ${username}`
        };
        }

    } catch (error: any) {
        logger.error(`Service: generarSello - ${error.message}`);
    }

}

export const consumeOcspSat = async (cert: string, rfc: string) => {
    try {


        const _file = await setLocalCert(cert, rfc);

        const _cert = await getAcCer(cert);

        const responseOpenssl = await procesoValidacionOpenssl(rfc);


        if (responseOpenssl) {

        } else {
            return false;
        }

    } catch (error: any) {
        logger.error(`Service: generarSello - ${error.message}`);
    }

}


/**
 * Valida existe certificado en el ubicación del servidor.
 *
 * @async
 * @function setLocalCert
 * @param {Certificate,rfc} param - Objeto con los datos de la e-firma a validar.
 * @returns {Promise<number>} 
 *
 * @author  @rich-develop
 */
export const setLocalCert = async (cert: string, rfc: string) => {
    const fs = require('node:fs');
    try {
        const urlFile = `c:\\RepoCerSAT\\${rfc}.txt`
        fs.access(urlFile, (err: any) => {
            if (err) {
                logger.info(`Certificado no existe - ${rfc}`);
            } else {
                logger.info(`Existe Certificado - ${rfc}`);
            }
        });

        return 1;
    } catch (error: any) {
        logger.error(`Certificado no existe - ${error.message}`);
        return 0;
    }
}

/**
 * Valida existe certificado en el ubicación del servidor.
 *
 * @async
 * @function getAcCer
 * @param {Certificate} param - Objeto con los datos de la e-firma a validar.
 * @returns {Promise<number>} 

 *
 * @author  @rich-develop
 */
export const getAcCer = async (cert: string) => {

    try {
        logger.info(`Validar logica de validacion Certificado- ${cert}`);
        return 1;
    } catch (error: any) {
        logger.error(`Certificado no existe - ${error.message}`);
        return 0;
    }
}


export const procesoValidacionOpenssl = async (rfc: string) => {
    try {

        return true;
        //en este process se envia o se hace el llamado al ocsp con el archivo en pem
        // url https://cfdi.sat.gob.mx/edofiel
    } catch (error: any) {
        logger.error(`Service: generarSello - ${error.message}`);
        return false;
    }

}


export const remueveCerLocal = async (rfc: string) => {

    try {
        logger.info(`Validar logica de eliminar archivos .cer y .pem Certificado- ${rfc}`);
        return 1;
    } catch (error: any) {
        logger.error(`Certificado no existe - ${error.message}`);
        return 0;
    }
}