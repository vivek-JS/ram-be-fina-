import {
  createWashing,
  updateWashing,
  deleteWashing,
} from "../controllers/washing.controller.js";
import express from "express";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";

const router = express.Router();

router
  .post("/createWashing", createWashing)
  .patch(
    "/updateWashing",
    [check("id").isMongoId().withMessage("Please enter valid media id")],
    checkErrors,
    updateWashing
  )
  .delete(
    "/deleteWashing",
    [check("id").isMongoId().withMessage("Please enter valid media id")],
    checkErrors,
    deleteWashing
  );

export default router;
