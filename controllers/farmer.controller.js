import Farmer from "../models/farmer.model.js";
import AppError from "../utility/appError.js";
import catchAsync from "../utility/catchAsync.js";
import { updateOne, deleteOne } from "./factory.controller.js";
import generateResponse from "../utility/responseFormat.js";

const updateFarmer = updateOne(Farmer, "Farmer");
const deleteFarmer = deleteOne(Farmer, "Farmer");

const findFarmer = catchAsync(async (req, res, next) => {
  const { mobileNumber } = req.body;

  const farmer = await Farmer.findOne({ mobileNumber });

  if (farmer) {
    return next(
      new AppError("Farmer with same mobile number already exists", 409)
    );
  }

  next();
});

const createFarmer = catchAsync(async (req, res, next) => {
  let farmer = await Farmer.findOne({ mobileNumber: req.body.mobileNumber });

  if (!farmer) {
    farmer = await new Farmer(req.body).save();
  }

  req.body.farmer = farmer._id;
  next();
});

export { createFarmer, updateFarmer, deleteFarmer, findFarmer };
