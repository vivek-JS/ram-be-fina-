import JobTitle from "../models/jobTitle.model.js";
import {
  createOne,
  getAll,
  updateOne,
  deleteOne,
} from "./factory.controller.js";

const getJobTitle = getAll(JobTitle, "JobTitle");
const createJobTitle = createOne(JobTitle, "JobTitle");
const updateJobTitle = updateOne(JobTitle, "JobTitle");
const deleteJobTitle = deleteOne(JobTitle, "JobTitle");

export { getJobTitle, createJobTitle, updateJobTitle, deleteJobTitle };
