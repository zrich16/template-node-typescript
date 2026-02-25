import express from 'express';

import ssoapiRoutes from "./ssoapi.routes";

const router = express.Router();


router.use("/ssoapi", ssoapiRoutes);

export default router;