import catchAsync from "../utility/catchAsync.js";
import AppError from "../utility/appError.js";
import generateResponse from "../utility/responseFormat.js";

const createOne = (Model, modelName) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    doc.password = undefined;

    const response = generateResponse(
      "Success",
      `${modelName} created successfully`,
      doc,
      undefined
    );

    return res.status(201).json(response);
  });

const updateOne = (Model, modelName) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    const response = generateResponse(
      "Success",
      `${modelName} updated successfully`,
      doc,
      undefined
    );

    return res.status(200).json(response);
  });

const updateOneAndPushElement = (Model, modelName) =>
  catchAsync(async (req, res, next) => {
    const { id, paymentAmount } = req.body;

    const updateObj = { ...req.body };
    // delete updateObj.id;

    if (paymentAmount !== undefined) {
      updateObj.$push = { payment: { paidAmount: paymentAmount } };
    }

    console.log(updateObj);

    const doc = await Model.findByIdAndUpdate(id, updateObj, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError(`No ${modelName} found with that ID`, 404));
    }

    const response = generateResponse(
      "Success",
      `${modelName} updated successfully`,
      doc,
      undefined
    );

    return res.status(200).json(response);
  });

const deleteOne = (Model, modelName) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.body.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    const response = generateResponse(
      "Success",
      `${modelName} deleted successfully`,
      undefined,
      undefined
    );

    return res.status(204).json(response);
  });

export { createOne, deleteOne, updateOne, updateOneAndPushElement };
