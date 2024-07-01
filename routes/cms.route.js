import express from "express";
import { check } from "express-validator";
import checkErrors from "../middlewares/checkErrors.middleware.js";
import { getVillageData } from "../controllers/cms.controller.js";

const router = express.Router();

router.get("/getVillageTalukaDistrict", getVillageData);

export default router;
