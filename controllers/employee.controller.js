import Employee from "../models/employee.model.js";
import {
  createOne,
  updateOne,
  deleteOne,
  getOne,
  getAll,
} from "./factory.controller.js";

const createEmployee = createOne(Employee, "Employee");
const updateEmployee = updateOne(Employee, "Employee");
const deleteEmployee = deleteOne(Employee, "Employee");
const getEmployees = getAll(Employee, "Employee");
const getEmployee = getOne(Employee, "Employee");

export {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployees,
  getEmployee,
};
