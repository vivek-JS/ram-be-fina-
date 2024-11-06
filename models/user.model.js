import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    enum: ["ADMIN", "SALES PERSON", "INVENTORY MANAGER"],
  },
});

const User = model("User", userSchema);

export default User;
