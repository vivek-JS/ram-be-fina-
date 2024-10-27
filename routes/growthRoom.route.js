import {
  createGrowthRoom,
  updateGrowthRoom,
  deleteGrowthRoom,
} from "../controllers/growthRoom.controller.js";
import express from "express";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";

const router = express.Router();

router
  .post("/createGrowthRoom", createGrowthRoom)
  .patch(
    "/updateGrowthRoom",
    [check("id").isMongoId().withMessage("Please enter valid growth room id")],
    checkErrors,
    updateGrowthRoom
  )
  .delete(
    "/deleteGrowthRoom",
    [check("id").isMongoId().withMessage("Please enter valid Growth Room id")],
    checkErrors,
    deleteGrowthRoom
  );

export default router;
