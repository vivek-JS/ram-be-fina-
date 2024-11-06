import mongoose, { Schema, model } from "mongoose";

const roomingOutSchema = new Schema(
  {
    noOfTrays: {
      type: Number,
      required: true,
    },
    noOfBottlesOutOfPH: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const RoomingOut = model("RoomingOut", roomingOutSchema);
export default RoomingOut;
