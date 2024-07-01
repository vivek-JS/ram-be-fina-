import { Parser as CsvParser } from "json2csv";
import catchAsync from "../utility/catchAsync.js";
import Farmer from "../models/farmer.model.js";
import Order from "../models/order.model.js";
import generateResponse from "../utility/responseFormat.js";
import { updateOne } from "./factory.controller.js";

const getCsv = catchAsync(async (req, res, next) => {
  // extracting data
  const { startDate, endDate } = req.query;

  let jsonData = await Order.find({
    createdAt: {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    },
  }).populate("farmer");

  // if data not found
  if (!jsonData || jsonData.length === 0) {
    return next(new AppError("Data not found", 404));
  }
  // preparing data
  let srNo = 0;
  let csvData = [];
  let csvFields = [
    "Sr",
    "Farmer name",
    "Mobile number",
    "Mode of payment",
    "Total amount",
    "Advance",
    "Number of plants",
    "Type of plants",
  ];
  await Promise.all(
    jsonData.map(async (obj) => {
      console.log(obj);

      csvData.push({
        Sr: srNo + 1,
        "Farmer name": obj.farmer.name,
        "Mobile number": obj.farmer.mobileNumber,
        "Mode of payment": obj?.modeOfPayment,
        "Total amount": obj?.rate,
        Advance: obj?.advance,
        "Number of plants": obj?.numberOfPlants,
        "Type of plants": obj?.typeOfPlants,
      });
    })
  );

  // seding response
  const csvParse = new CsvParser({ fields: csvFields });
  const csvDataParsed = csvParse.parse(csvData);
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=payments.csv");
  res.status(200).end(csvDataParsed);
});

const createOrder = catchAsync(async (req, res, next) => {
  let order = await new Order(req.body).save();

  const response = await generateResponse(
    200,
    "Order placed successfully",
    order,
    undefined
  );
  return res.status(200).json(response);
});

const changePaymentStatus = updateOne(Order, "Order");

const updateOrder = catchAsync(async (req, res) => {
  const order = await Order.findById(req.body.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!order) {
    return next(new AppError("No document found with that ID", 404));
  }

  if (req.body.payment) {
    order.payment.push(req.body.payment);
  }

  if (req.body.paymentStatus) {
    order.paymentStatus = req.body.paymentStatus;
  }
  await order.save();

  const response = await generateResponse(
    200,
    "Order updated successfully",
    order,
    undefined
  );
  return res.status(200).json(response);
});

export { getCsv, createOrder, changePaymentStatus, updateOrder };
