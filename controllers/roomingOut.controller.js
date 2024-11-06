import RoomingOut from "../models/roomingOut.model.js";
import { createOne, updateOne, deleteOne } from "./factory.controller.js";

const createRoomingOut = createOne(RoomingOut, "RoomingOut");
const updateRoomingOut = updateOne(RoomingOut, "RoomingOut");
const deleteRoomingOut = deleteOne(RoomingOut, "RoomingOut");

export { createRoomingOut, updateRoomingOut, deleteRoomingOut };
