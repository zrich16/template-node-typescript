import app from "./app";
import dotenv from "dotenv";
import logger from './logger/logger';
dotenv.config();

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
    logger.info(`🚀 Server corriendo en ${PORT} `);
    logger.info(`🚀 API Nutricion : Nodejs + Typescript + Postgres `);
});
