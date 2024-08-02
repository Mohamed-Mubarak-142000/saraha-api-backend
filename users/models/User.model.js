import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    pictureImage: String,
    CoverPictureImage: String,
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },

    password: {
      type: String,
      required: true,
    },
    age: String,
    gender: {
      type: String,
      default: "male",
      enum: ["male", "female"],
    },
    phone: String,
    status: {
      type: String,
      default: "offline",
      enum: ["offline", "online"],
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.User || model("User", userSchema);
export default UserModel;
