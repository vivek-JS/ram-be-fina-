import express from "express";
import cors from "cors";
const server = express();
import path from "path";
import cookieParser from "cookie-parser";
import errorRouter from "./controllers/error.controller.js";
import mongoSanitize from "express-mongo-sanitize";
import { xss } from "express-xss-sanitizer";
import helmet from "helmet";
import hpp from "hpp";

// middlewares
server.use(cors());
server.use(express.json());
server.use(cookieParser());
// server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use(mongoSanitize());
server.use(xss());
server.use(helmet());

// parameter white listing
server.use(
  hpp({
    whitelist: ["date", "fromDate"],
  })
);

// importing routes
import farmerRoute from "./routes/farmer.route.js";
import growthRoomRoute from "./routes/growthRoom.route.js";
import inocalationRoute from "./routes/inocalation.route.js";
import mediaRoute from "./routes/media.route.js";
import orderRoute from "./routes/order.route.js";
import plateRoute from "./routes/plate.route.js";
import roomingOutRoute from "./routes/roomingOut.route.js";
import userRoute from "./routes/user.route.js";
import washingRoute from "./routes/washing.route.js";

// defining routes
server.use("/api/v1/farmer", farmerRoute);
server.use("/api/v1/growthRoom", growthRoomRoute);
server.use("/api/v1/inocalation", inocalationRoute);
server.use("/api/v1/media", mediaRoute);
server.use("/api/v1/order", orderRoute);
server.use("/api/v1/plate", plateRoute);
server.use("/api/v1/roomingOut", roomingOutRoute);
server.use("/api/v1/user", userRoute);
server.use("/api/v1/washing", washingRoute);

server.use(errorRouter);

export default server;
