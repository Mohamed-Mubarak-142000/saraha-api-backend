import { asyncHandler } from "../../utils/errorHandle.js";
import UserModel from "../models/User.model.js";

export const getUserModule = asyncHandler(async (req, res, next) => {
  const user = await UserModel.findById(req.user._id);
  return res.json({ message: "User Profile", data: user });
});
