import { Schema, model } from "mongoose";

const dispatchSchema = new Schema({
  date: {
    type: Date,
  },
  batchNumber: {
    type: Number,
    required: true,
  },
  numberOfTraysDispatched: {
    type: Number,
    required: true,
  },
  shadeNumber: {
    type: Number,
    required: true,
  },
});

const secondaryHardeningSchema = new Schema({
  dispatch: dispatchSchema,
});

const SecondaryHardening = model("SecondaryHardeing", secondaryHardeningSchema);
export default SecondaryHardening;
