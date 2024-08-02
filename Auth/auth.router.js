import { Router } from "express";
import * as authController from "./controllers/auth.js";
import validation from "../middleware/validator.middleware.js";
import * as validators from "./controllers/auth.validation.js";
const router = Router();

router.post(
  "/signUp",
  validation(validators.signUpSchema),
  authController.signUpModule
);
router.post(
  "/login",
  validation(validators.signInSchema),
  authController.signInModule
);
export default router;
