import express from "express";
import {
  getCsv,
  changePaymentStatus,
  updateOrder,
} from "../controllers/order.controller.js";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";

const router = express.Router();

router
  .get("/getCSV", getCsv)
  .patch(
    "/updatePaymentStatus",
    [
      check("id").isMongoId().withMessage("Please provide order id"),
      check("paymentStatus")
        .notEmpty()
        .withMessage("Please provide payment status"),
    ],
    checkErrors,
    changePaymentStatus
  )
  .patch(
    "/addNewPayment",
    [check("id").isMongoId().withMessage("Please provide order id")],
    checkErrors,
    updateOrder
  );

export default router;
