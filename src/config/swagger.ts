import swaggerJSDoc from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";
import path from "path";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API SSO",
      version: "1.0.0",
      description: "Documentación oficial de la API",
    },
    servers: [
      {
        url: "http://localhost:3050/api",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [path.join(process.cwd(), "src/**/*.ts")],
};

export const swaggerSpec = swaggerJSDoc(options);
