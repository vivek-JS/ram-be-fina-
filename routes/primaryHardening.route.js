import express from "express";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";
import {
  createPrimaryHardening,
  updatePrimaryHardening,
  deletePrimaryHardening,
  getPrimaryHardening,
} from "../controllers/primaryHardening.controller.js";

const router = express.Router();

router
  .get("/getPrimaryHardening", getPrimaryHardening)
  .post("/createPrimaryHardening", createPrimaryHardening)
  .patch("/updatePrimaryHardening", updatePrimaryHardening)
  .delete("/deletePrimaryHardening", deletePrimaryHardening);

export default router;
