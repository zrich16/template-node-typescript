import { createLogger, format, transports, Logger } from 'winston';

// Definición de formatos para la consola y archivos
const consoleFormat = format.combine(
  format.colorize(), // Colores para la consola
  format.timestamp(), // Añade marca de tiempo
  format.printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`)
);

const fileFormat = format.combine(
  format.timestamp(),
  format.json() // Formato JSON para archivos
);

const logger: Logger = createLogger({
  level: 'info', // Nivel mínimo de logs a capturar
  format: fileFormat, // Formato por defecto para archivos
  transports: [
    new transports.Console({ format: consoleFormat }), // Transport para la consola
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // Solo errores a un archivo
    new transports.File({ filename: 'logs/combined.log' }), // Todos los logs a otro archivo
  ],
  exceptionHandlers: [ // Manejo de excepciones no capturadas
    new transports.File({ filename: 'logs/exceptions.log' })
  ],
  rejectionHandlers: [ // Manejo de Promesas rechazadas
    new transports.File({ filename: 'logs/rejections.log' })
  ]
});

export default logger;
