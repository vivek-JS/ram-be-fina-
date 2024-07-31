import { Schema, model } from "mongoose";

const jobTitleSchema = new Schema({
  jobTitle: String,
});

const JobTitle = model("JobTitle", jobTitleSchema);
export default JobTitle;
