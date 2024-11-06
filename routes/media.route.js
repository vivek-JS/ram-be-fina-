import {
  createMedia,
  updateMedia,
  deleteMedia,
} from "../controllers/media.controller.js";
import express from "express";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";

const router = express.Router();

router
  .post("/createMedia", createMedia)
  .patch(
    "/updateMedia",
    [check("id").isMongoId().withMessage("Please enter valid media id")],
    checkErrors,
    updateMedia
  )
  .delete(
    "/deleteMedia",
    [check("id").isMongoId().withMessage("Please enter valid media id")],
    checkErrors,
    deleteMedia
  );

export default router;
