import bcrypt from "bcryptjs";

export const hashed = ({ plainText, salt = process.env.SALT_ROUND } = {}) => {
  const hashValue = bcrypt.hashSync(plainText, parseInt(salt));
  return hashValue;
};

export const compared = ({ plainText, hashValue } = {}) => {
  const match = bcrypt.compareSync(plainText, hashValue);
  return match;
};
