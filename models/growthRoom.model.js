import mongoose, { Schema, model } from "mongoose";

const growthRoomSchema = new Schema(
  {
    helpers: {
      type: String,
      required: true,
    },
    engagged: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const GrowthRoom = model("GrowthRoom", growthRoomSchema);
export default GrowthRoom;
