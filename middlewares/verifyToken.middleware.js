import jwt from "jsonwebtoken";
import generateResponse from "../utility/responseFormat.js";

const verifyToken = async (req, res, next) => {
  let tempToken = req.headers.authorization;
  try {
    const token = req.cookies?.accessToken || tempToken.replace("Bearer ", "");

    // if token not found
    if (!token) {
      const response = generateResponse(
        "error",
        "Unauthorized request",
        undefined,
        undefined
      );

      return res.status(401).json(response);
    }

    // decoding token
    const id = jwt.verify(token, process.env.PRIVATE_KEY_PATH);

    // document find by id

    // if not found then send error

    // if found then add that document to request

    next();
  } catch (error) {
    const response = generateResponse(
      "error",
      "Unauthorized request",
      undefined,
      undefined
    );

    return res.status(401).json(response);
  }
};

export default verifyToken;
