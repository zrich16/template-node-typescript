import { Pool } from 'pg';
import { User } from '../../../model/user.model';


import logger from '../../../logger/logger';

import pool from '../../../config/conexionPostgre';

export const getAllUsersDB= async () => {
    let result;

    try {
        result = await pool.query("SELECT username,pass FROM usuarios");
        return result.rows;
    } catch (error) {
        logger.error(`Repository getAllUsersDB `);
        return null;
    }

};