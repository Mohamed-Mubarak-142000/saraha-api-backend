import { Router } from "express";
import * as userController from "./controllers/user.js";
import authMiddleWare from "../middleware/auth.middleware.js";

const router = Router();

router.get("/profile", authMiddleWare, userController.getUserModule);
export default router;
