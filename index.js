import express from "express";
import initApp from "./appRouter.js";
import connectionDB from "./db/connection.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 5000;
connectionDB();
initApp(app, express);

app.listen(port, () => {
  console.log("Server is Running on ==>" + port);
});
