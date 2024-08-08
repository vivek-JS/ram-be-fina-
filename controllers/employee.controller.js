import Employee from "../models/employee.model.js";
import { createOne, updateOne, deleteOne } from "./factory.controller.js";

const createEmployee = createOne(Employee, "Employee");
const updateEmployee = updateOne(Employee, "Employee");
const deleteEmployee = deleteOne(Employee, "Employee");
const getEmployee = () => {};

export { createEmployee, updateEmployee, deleteEmployee, getEmployee };
