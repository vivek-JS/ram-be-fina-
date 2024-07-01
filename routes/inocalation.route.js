import {
  createInocalation,
  updateInocalation,
  deleteInocalation,
} from "../controllers/inocalation.controller.js";
import express from "express";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";

const router = express.Router();

router
  .post("/createInocalation", createInocalation)
  .patch(
    "/updateInocalation",
    [check("id").isMongoId().withMessage("Please enter valid inocalation id")],
    checkErrors,
    updateInocalation
  )
  .delete(
    "/deleteInocalation",
    [check("id").isMongoId().withMessage("Please enter valid inocalation id")],
    checkErrors,
    deleteInocalation
  );

export default router;
