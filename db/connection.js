import { error } from "console";
import mongoose from "mongoose";

const connectionDB = async () => {
  return await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connection with Database.!");
    })
    .catch(() => {
      console.log("Failed Connected Database.!" + error);
    });
};
export default connectionDB;
