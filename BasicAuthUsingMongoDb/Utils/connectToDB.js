import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()
const dbURI = process.env.mongoURI;
const db = function () {
  mongoose
    .connect(dbURI)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default db;
