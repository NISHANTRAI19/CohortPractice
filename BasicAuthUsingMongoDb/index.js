import express from "express";
import dotenv from "dotenv";
import db from "./Utils/connectToDB.js";
import  registerRouter  from "./routes/UserRoutes/routes.user.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

db()
app.use('/api/v1/register',registerRouter)
app.listen(port, () => {
  console.log("Server started at ", port);
});
