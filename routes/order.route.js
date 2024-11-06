import express from "express";
import {
  getCsv,
<<<<<<< HEAD
  updateOrder,
  addNewPayment,
  getOrders,
} from "../controllers/order.controller.js";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
=======
  changePaymentStatus,
  updateOrder,
} from "../controllers/order.controller.js";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";
>>>>>>> e4a271b (first commit)

const router = express.Router();

router
  .get("/getCSV", getCsv)
<<<<<<< HEAD
  .get("/getOrders", getOrders)
=======
>>>>>>> e4a271b (first commit)
  .patch(
    "/updatePaymentStatus",
    [
      check("id").isMongoId().withMessage("Please provide order id"),
      check("paymentStatus")
        .notEmpty()
        .withMessage("Please provide payment status"),
    ],
    checkErrors,
<<<<<<< HEAD
    updateOrder
  )
  .patch(
    "/addNewPayment",
    upload.single('receiptPhoto'),
    [
      check("id").isMongoId().withMessage("Please provide order id"),
      check("paymentAmount").notEmpty().withMessage("Please provide payment amount")
    ],
    checkErrors,
    addNewPayment
  )
  .patch(
    "/updateOrder",
=======
    changePaymentStatus
  )
  .patch(
    "/addNewPayment",
>>>>>>> e4a271b (first commit)
    [check("id").isMongoId().withMessage("Please provide order id")],
    checkErrors,
    updateOrder
  );

export default router;
