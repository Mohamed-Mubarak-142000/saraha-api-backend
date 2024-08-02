import { Router } from "express";
import * as messageController from "./controllers/message.js";
import authMiddleWare from "./../middleware/auth.middleware.js";
import * as validateMessage from "./controllers/message.validate.js";
import validation from "./../middleware/validator.middleware.js";
const router = Router();

router.get("/", authMiddleWare, messageController.getMessageModule);
router.post(
  "/:receiverId",
  validation(validateMessage.sendMessage),
  messageController.sendMessage
);

export default router;
