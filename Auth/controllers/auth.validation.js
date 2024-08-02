import joi from "joi";
export const signUpSchema = {
  body: joi
    .object({
      userName: joi.string().alphanum().min(3).max(10).required().messages({
        "string.empty": "Please fill in year userName",
        "any.required": "userName is required",
        "string.min": "length must be at least 3 characters long",
        "string.max": "length must be less than or equal to 10 characters long",
      }),
      email: joi
        .string()
        .email({
          minDomainSegments: 2,
          maxDomainSegments: 3,
          tlds: { allow: ["com", "net", "edu"] },
        })
        .required()
        .messages({
          "string.email": "your email not valid",
        }),
      password: joi
        .string()
        .pattern(
          new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-z])(?=.[a-zA-Z]).{8,}$/)
        )
        .required(),
      cPassword: joi.ref("password"),
    })
    .required(),
};

export const signInSchema = {
  body: joi
    .object({
      password: joi
        .string()
        .pattern(
          new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-z])(?=.[a-zA-Z]).{8,}$/)
        )
        .required(),
      email: joi.string().email().required(),
    })
    .required(),
};
