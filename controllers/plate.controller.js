import { createOne, updateOne, deleteOne } from "./factory.controller.js";
import Plate from "../models/plate.model.js";

const createPlate = createOne(Plate, "Plate");
const updatePlate = updateOne(Plate, "Plate");
const deletePlate = deleteOne(Plate, "Plate");

export { createPlate, updatePlate, deletePlate };
