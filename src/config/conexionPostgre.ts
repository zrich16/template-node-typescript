import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); // Carga las variables de .env

const pool = new Pool({
  user: process.env.DB_POSTGRE_USER,
  host: process.env.DB_POSTGRE_HOST,
  database: process.env.DB_POSTGRE_NAME,
  password: process.env.DB_POSTGRE_PASSWORD,
  port: parseInt(process.env.DB_POSTGRE_PORT || '5432', 10),
});

export default pool;
