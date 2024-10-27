import Washing from "../models/washing.model.js";
import { createOne, updateOne, deleteOne } from "./factory.controller.js";

const createWashing = createOne(Washing, "Washing");
const updateWashing = updateOne(Washing, "Washing");
const deleteWashing = deleteOne(Washing, "Washing");

export { createWashing, updateWashing, deleteWashing };
