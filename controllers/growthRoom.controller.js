import GrowthRoom from "../models/growthRoom.model.js";
import { createOne, updateOne, deleteOne } from "./factory.controller.js";

const createGrowthRoom = createOne(GrowthRoom, "GrowthRoom");
const updateGrowthRoom = updateOne(GrowthRoom, "GrowthRoom");
const deleteGrowthRoom = deleteOne(GrowthRoom, "GrowthRoom");

export { createGrowthRoom, updateGrowthRoom, deleteGrowthRoom };
