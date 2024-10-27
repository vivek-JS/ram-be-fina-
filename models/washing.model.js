import mongoose, { Schema, model } from "mongoose";

const washingSchema = new Schema(
  {
    numberOfBottlesWashed: {
      type: Number,
      required: true,
    },
    numberOfPersonEngaged: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Washing = model("Washing", washingSchema);
export default Washing;
