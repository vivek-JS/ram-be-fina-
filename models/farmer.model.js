import mongoose, { Schema, model } from "mongoose";

// const orderSchema = new Schema(
//   {
//     typeOfPlants: {
//       type: String,
//     },
//     numberOfPlants: {
//       type: Number,
//     },
//     modeOfPayment: {
//       type: String,
//     },
//     rate: {
//       type: Number,
//     },
//     advance: {
//       type: Number,
//     },
//     dateOfAdvance: {
//       type: Date,
//     },
//     bankName: {
//       type: String,
//     },
//     receiptPhoto: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

const farmerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Farmer name requried"],
  },
  village: {
    type: String,
    required: [true, "Village name requried"],
  },
  taluka: {
    type: String,
    required: [true, "Taluka name requried"],
  },
  district: {
    type: String,
    required: [true, "District name requried"],
  },
  mobileNumber: {
    type: Number,
    required: [true, "Mobile number requried"],
    unique: true,
  },
});

const Farmer = model("Farmer", farmerSchema);
export default Farmer;
