import express from "express";

import contactRoutes from "./contactRoutes.js";

const router = express.Router();
router.use("/contact", contactRoutes);

export default router;
