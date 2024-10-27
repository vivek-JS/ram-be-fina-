import express from "express";
import {
  createPlate,
  updatePlate,
  deletePlate,
} from "../controllers/plate.controller.js";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";
const router = express.Router();

router
  .post("/createPlate", createPlate)
  .patch("/updatePlate", updatePlate)
  .delete("/deletePlate", deletePlate);

export default router;
