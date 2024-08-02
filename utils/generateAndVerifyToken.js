import jwt from "jsonwebtoken";

export const generateToken = ({
  payload,
  signature = process.env.TEXT_SIGNATURE,
  expiresIn = 60 * 60,
} = {}) => {
  const token = jwt.sign(payload, signature, {
    expiresIn: parseInt(expiresIn),
  });
  return token;
};

export const verifyToken = ({
  token,
  signature = process.env.TEXT_SIGNATURE,
} = {}) => {
  const decoded = jwt.verify(token, signature);
  return decoded;
};
