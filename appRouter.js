import authRouter from "./Auth/auth.router.js";
import messageRouter from "./messages/message.router.js";
import userRouter from "./users/user.router.js";
import { globalHandlerError } from "./utils/errorHandle.js";

const initApp = (app, express) => {
  //convert buffer data
  app.use(express.json());
  //app routing
  app.get("/", (req, res, next) => {
    return res.send("<h1>hello home</h1>");
  });

  app.use("/user", userRouter);
  app.use("/auth", authRouter);
  app.use("/message", messageRouter);

  app.all("*", (req, res, next) => {
    return res.json({ message: "Invalid routing.!" });
  });

  app.use(globalHandlerError);
};

export default initApp;
