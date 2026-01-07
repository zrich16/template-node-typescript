import { getAllUsersDB } from "../repository/user.repository";

import logger from '../../../logger/logger';

export const getAllUsers = async () => {
    let data;
    try {
        logger.info(`Servicio   getAllUsers `);
        data = await getAllUsersDB();
        if (data && data.length > 0) {
            return { success: true, data, message: "Usuarios obtenidos correctamente" };
        } else {
            return { success: false, data: null, message: "Usuarios no encontrados" };
        }

    } catch (error: any) {
        logger.error(`Service: getAllUsers - ${error.message}`);
        return {
            success: false, data: null, message: `Service: getAllUsers - ${error.message}`
        };
    }

};