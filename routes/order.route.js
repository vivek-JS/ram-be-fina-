import express from "express";
import {
  getCsv,
  updateOrder,
  addNewPayment,
  getOrders,
} from "../controllers/order.controller.js";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";

const router = express.Router();

router
  .get("/getCSV", getCsv)
  .get("/getOrders", getOrders)
  .patch(
    "/updatePaymentStatus",
    [
      check("id").isMongoId().withMessage("Please provide order id"),
      check("paymentStatus")
        .notEmpty()
        .withMessage("Please provide payment status"),
    ],
    checkErrors,
    updateOrder
  )
  .patch(
    "/addNewPayment",
    [check("id").isMongoId().withMessage("Please provide order id")],
    checkErrors,
    addNewPayment
  )
  .patch(
    "/updateOrder",
    [check("id").isMongoId().withMessage("Please provide order id")],
    checkErrors,
    updateOrder
  );

export default router;
