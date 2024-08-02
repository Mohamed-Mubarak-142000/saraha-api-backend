const dataMethods = ["body", "query", "params"];
const validation = (schema) => {
  return (req, res, next) => {
    const allValidation = [];
    dataMethods.forEach((key) => {
      if (schema[key]) {
        console.log("first", key);
        const validationResult = schema[key].validate(req[key], {
          abortEarly: false,
        });

        if (validationResult.error) {
          allValidation.push(validationResult.error.details);
        }
      }
    });

    if (allValidation.length > 0) {
      return res.json({ message: "Validation error", allValidation });
    } else {
      next();
    }
  };
};
export default validation;
