import mongoose, { Schema, model } from "mongoose";

const plateSchema = new Schema(
  {
    numberOfPlates: {
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

const Plate = model("Plate", plateSchema);
export default Plate;
