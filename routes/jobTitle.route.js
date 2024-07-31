import {
  createJobTitle,
  getJobTitle,
  updateJobTitle,
  deleteJobTitle,
} from "../controllers/jobTitle.controller.js";
import express from "express";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";

const router = express.Router();

router
  .get("/getJobTitle", getJobTitle)
  .post(
    "/createJobTitle",
    [check("jobTitle").notEmpty().withMessage("Please enter valid job title")],
    checkErrors,
    createJobTitle
  )
  .patch(
    "/updateJobTitle",
    [
      check("id").isMongoId().withMessage("Please enter valid id"),
      check("jobTitle").notEmpty().withMessage("Please enter valid job title"),
    ],
    checkErrors,
    updateJobTitle
  )
  .delete(
    "/deleteJobTitle",
    [check("id").isMongoId().withMessage("Please enter valid id")],
    checkErrors,
    deleteJobTitle
  );

export default router;
