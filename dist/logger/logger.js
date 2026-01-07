"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
// Definición de formatos para la consola y archivos
const consoleFormat = winston_1.format.combine(winston_1.format.colorize(), // Colores para la consola
winston_1.format.timestamp(), // Añade marca de tiempo
winston_1.format.printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`));
const fileFormat = winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json() // Formato JSON para archivos
);
const logger = (0, winston_1.createLogger)({
    level: 'info', // Nivel mínimo de logs a capturar
    format: fileFormat, // Formato por defecto para archivos
    transports: [
        new winston_1.transports.Console({ format: consoleFormat }), // Transport para la consola
        new winston_1.transports.File({ filename: 'logs/error.log', level: 'error' }), // Solo errores a un archivo
        new winston_1.transports.File({ filename: 'logs/combined.log' }), // Todos los logs a otro archivo
    ],
    exceptionHandlers: [
        new winston_1.transports.File({ filename: 'logs/exceptions.log' })
    ],
    rejectionHandlers: [
        new winston_1.transports.File({ filename: 'logs/rejections.log' })
    ]
});
exports.default = logger;
