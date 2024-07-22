import mongoose, { Schema, model } from "mongoose";

const inoculationSchema = new Schema(
  {
    operator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    nameOfOperator: {
      type: String,
    },
    in: {
      type: Date,
    },
    out: {
      type: Date,
    },
  },
  { _id: false }
);

const contaminationSchema = new Schema(
  {
    numberOfBottles: {
      type: Number,
    },
    percentageOfContamination: {
      type: Number,
    },
    in: {
      type: Date,
    },
    out: {
      type: Date,
    },
  },
  { _id: false }
);

const mediaRoomSchema = new Schema(
  {
    numberOfBottles: {
      type: Number,
    },
    numberOfLitersCreated: {
      type: Number,
    },
    numberOfEmployeeEngaged: {
      type: Number,
    },
    listOfEmployeeEngaged: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    in: {
      type: Date,
    },
    out: {
      type: Date,
    },
  },
  { _id: false }
);

const washingSchema = new Schema(
  {
    numberOfBottles: {
      type: Number,
    },
    numberOfEmployeeEngaged: {
      type: Number,
    },
    listOfEmployeeEngaged: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    in: {
      type: Date,
    },
    out: {
      type: Date,
    },
  },
  { _id: false }
);

const platesSchema = new Schema(
  {
    numberOfPlates: {
      type: Number,
    },
    numberOfEmployeeEngaged: {
      type: Number,
    },
    listOfEmployeeEngaged: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    in: {
      type: Date,
    },
    out: {
      type: Date,
    },
  },
  { _id: false }
);

const growthRoomSchema = new Schema(
  {
    numberOfEmployeeEngaged: {
      type: Number,
    },
    listOfEmployeeEngaged: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    in: {
      type: Date,
    },
    out: {
      type: Date,
    },
  },
  { _id: false }
);

const shootingSchema = new Schema(
  {
    in: {
      type: Date,
    },
    out: {
      type: Date,
    },
  },
  { _id: false }
);

const rootingOutSchema = new Schema(
  {
    numberOfTrays: {
      type: Number,
    },
    numberOfBottles: {
      type: Number,
    },
    in: {
      type: Date,
    },
    out: {
      type: Date,
    },
  },
  { _id: false }
);

const labSchema = new Schema({
  batchNumber: {
    type: String,
    required: true,
  },
  startingDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  endingDate: {
    type: Date,
  },
  currentProcess: {},
  dateOfDispatch: {
    type: Date,
  },
  shadeNumber: {
    type: Number,
  },
  inoculation: inoculationSchema,
  contamination: contaminationSchema,
  mediaRoom: mediaRoomSchema,
  washing: washingSchema,
  plate: platesSchema,
  growthRoom: growthRoomSchema,
  shooting: shootingSchema,
  rootingOut: rootingOutSchema,
});

const Lab = model("Lab", labSchema);
export default Lab;
