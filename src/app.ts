import express from "express";
import cors from 'cors';
import router from "./routes/index";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", router);
// Ruta Swagger


app.get("/", (_req, res) => {
  res.send("API FGJ CDMX SSO APINodejs + Typescript + Postgres 🚀");
});

export default app;
