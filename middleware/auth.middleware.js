import UserModel from "../users/models/User.model.js";
import { asyncHandler } from "../utils/errorHandle.js";
import { verifyToken } from "../utils/generateAndVerifyToken.js";

const authMiddleWare = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization?.startsWith("Mubarak__")) {
    return next(new Error("Invalid bearer key.!"));
  }

  const token = authorization.split(process.env.BEARER_TOKEN)[1];
  if (!token) {
    return next(new Error("Invalid token .!"));
  }

  const decoded = verifyToken({ token });
  if (!decoded?.id) {
    return next(new Error("Invalid token.!"));
  }

  const authUser = await UserModel.findById(decoded.id).select(
    "userName role status email"
  );
  if (!authUser) {
    return next(new Error("Not Register User.!"));
  }
  req.user = authUser; // user id
  return next();
});

export default authMiddleWare;
