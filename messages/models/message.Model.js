import mongoose, { model, Types } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },

    receiverId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.models.Message || model("Message", messageSchema);
export default MessageModel;
