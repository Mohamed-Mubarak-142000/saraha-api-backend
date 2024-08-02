import MessageModel from "../models/message.Model.js";
import UserModel from "./../../users/models/User.model.js";
import { asyncHandler } from "./../../utils/errorHandle.js";

export const getMessageModule = asyncHandler(async (req, res, next) => {
  const listMessage = await MessageModel.find({ receiverId: req.user._id });
  console.log("user data", req.user._id);
  return res.json({ message: "Get all messages", data: listMessage });
});

export const sendMessage = asyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;
  const { message } = req.body;

  const user = await UserModel.findById(receiverId);

  if (!user) {
    return next(new Error("Invalid account"));
  }

  const createMessage = await MessageModel.create({
    message: message,
    receiverId: user._id,
  });

  return res
    .status(201)
    .json({ message: "Message Send to User", createMessage });
});
