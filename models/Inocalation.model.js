import mongoose, { Schema, model } from "mongoose";

const inocalationSchema = new Schema(
  {
    operator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    in: {
      type: Date,
      required: true,
    },
    out: {
      type: Date,
      required: true,
    },
    contamination: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Inocalation = model("Inocalation", inocalationSchema);
export default Inocalation;
