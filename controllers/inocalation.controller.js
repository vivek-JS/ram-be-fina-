import Inocalation from "../models/Inocalation.model.js";
import { createOne, updateOne, deleteOne } from "./factory.controller.js";

const createInocalation = createOne(Inocalation, "Inocalation");
const updateInocalation = updateOne(Inocalation, "Inocalation");
const deleteInocalation = deleteOne(Inocalation, "Inocalation");

export { createInocalation, updateInocalation, deleteInocalation };
