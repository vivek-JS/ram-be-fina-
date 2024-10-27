import mongoose, { Schema, model } from "mongoose";

const mediaSchema = new Schema(
  {
    numberOfBottles: {
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

const Media = model("Media", mediaSchema);
export default Media;
