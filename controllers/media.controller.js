import Media from "../models/media.model.js";
import { createOne, updateOne, deleteOne } from "./factory.controller.js";

const createMedia = createOne(Media, "Media");
const updateMedia = updateOne(Media, "Media");
const deleteMedia = deleteOne(Media, "Media");

export { createMedia, updateMedia, deleteMedia };
