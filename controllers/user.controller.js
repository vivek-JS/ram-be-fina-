import generateResponse from "../utility/responseFormat.js";
import catchAsync from "../utility/catchAsync.js";
import AppError from "../utility/appError.js";
import User from "../models/user.model.js";
import { createOne, updateOne, deleteOne } from "./factory.controller.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = catchAsync(async (req, res, next) => {
  const password = req.body.password;
  req.body.password = await bcrypt.hash(password, 10);
  const doc = await new User(req.body).save();

  doc.password = undefined;

  const response = generateResponse(
    "Success",
    `User created successfully`,
    doc,
    undefined
  );

  return res.status(201).json(response);
});

const updateUser = updateOne(User, "User");
const deleteUser = deleteOne(User, "User");

const findUser = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return next(
      new AppError("User with same mobile number already exists", 409)
    );
  }

  next();
});

const generateToken = (id) => {
  const token = jwt.sign(
    {
      _id: id,
    },
    process.env.PRIVATE_KEY,
    {
      expiresIn: process.env.TOKEN_EXPIRY,
    }
  );

  return token;
};

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError("Wrong credentails", 400));
  }

  user.password = undefined;

  const token = generateToken(user._id);
  const response = generateResponse(
    "Success",
    "Login success",
    user,
    undefined
  );
  return res
    .status(200)
    .cookie("Authorization", token, { httpOnly: true })
    .json({ token: token, response });
});

export { createUser, updateUser, deleteUser, findUser, login };
