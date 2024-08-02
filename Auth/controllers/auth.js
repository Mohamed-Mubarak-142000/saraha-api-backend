import UserModel from "../../users/models/User.model.js";
import { asyncHandler } from "../../utils/errorHandle.js";
import { generateToken } from "../../utils/generateAndVerifyToken.js";
import { compared, hashed } from "../../utils/hashedAndCompare.password.js";
import { signInSchema, signUpSchema } from "./auth.validation.js";

export const signUpModule = asyncHandler(async (req, res, next) => {
  const { userName, email, password } = req.body;
  console.log({ userName, email, password });

  const user = await UserModel.findOne({ email });
  if (user) {
    return next(new Error("Email already exist.!"));
  }

  const hashedPassword = hashed({ plainText: password });
  const createUser = await UserModel.create({
    userName,
    email,
    password: hashedPassword,
  });

  return res.json({ message: "Create User Success.!", data: createUser });
});

export const signInModule = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return next(new Error("This is Email Not Exist.!"));
  }

  const comparedPassword = compared({
    plainText: password,
    hashValue: user.password,
  });

  if (!comparedPassword) {
    return next(new Error("Password Not Match.!"));
  }

  const token = generateToken({
    payload: { id: user._id, isLogged: true, role: user.role },
  });

  user.status = "online";
  await user.save();

  return res.json({ message: "User Login Success.!", data: user, token });
});
