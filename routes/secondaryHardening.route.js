import express from "express";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";
import {
  createSecondaryHardening,
  updateSecondaryHardening,
  deleteSecondaryHardening,
  getSecondaryHardening,
} from "../controllers/secondaryHardening.controller.js";

const router = express.Router();

router
  .get("/getSecondaryHardening", getSecondaryHardening)
  .post("/createSecondaryHardening", createSecondaryHardening)
  .patch("/updateSecondaryHardening", updateSecondaryHardening)
  .delete("/deleteSecondaryHardening", deleteSecondaryHardening);

export default router;
