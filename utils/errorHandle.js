export const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((error) => {
      return next(new Error(error.message));
    });
  };
};

export const globalHandlerError = (err, req, res, next) => {
  if (err) {
    if (process.env.MOOD == "DEV") {
      return res.json({ message: err.message, err, stack: err?.stack });
    }
    return res.json({ message: err?.message });
  }
};
