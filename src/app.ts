import express from "express";
import userRoutes from "./routes/user.routes";

import router from "./routes/index";
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", router);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

export default app;
