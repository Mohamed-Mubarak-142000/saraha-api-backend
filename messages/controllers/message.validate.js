import joi from "joi";

export const sendMessage = {
  body: joi
    .object({
      message: joi.string().min(5).max(100).required(),
    })
    .required(),

  params: joi
    .object({
      receiverId: joi.string().min(24).max(24).required(),
    })
    .required(),
};
