import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  findUser,
  login,
} from "../controllers/user.controller.js";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";

const router = express.Router();

router
  .post(
    "/login",
    [
      check("email", "Please provide valid email").isEmail(),
      check("password", "Please provide valid password").notEmpty(),
    ],
    login
  )
  .post(
    "/createUser",
    [
      check("name", "Please provide valid name").notEmpty(),
      check("email", "Please provide valid email").isEmail(),
      check("phoneNumber", "Please provide valid phoneNumber").notEmpty(),
      check("password", "Please provide valid password").notEmpty(),
      check("type", "Please provide valid type").notEmpty(),
    ],
    checkErrors,
    findUser,
    createUser
  )
  .patch(
    "/updateUser",
    [check("id", "Please provide valid userId").isMongoId()],
    checkErrors,
    updateUser
  )
  .delete(
    "/deleteUser",
    [check("id", "Please provide valid userId").isMongoId()],
    checkErrors,
    deleteUser
  );

export default router;
