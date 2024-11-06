import {
  createRoomingOut,
  updateRoomingOut,
  deleteRoomingOut,
} from "../controllers/roomingOut.controller.js";
import express from "express";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";

const router = express.Router();

router
  .post("/createRoomingOut", createRoomingOut)
  .patch(
    "/updateRoomingOut",
    [check("id").isMongoId().withMessage("Please enter valid media id")],
    checkErrors,
    updateRoomingOut
  )
  .delete(
    "/deleteRoomingOut",
    [check("id").isMongoId().withMessage("Please enter valid media id")],
    checkErrors,
    deleteRoomingOut
  );

export default router;
