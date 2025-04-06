import express from "express";
import { register } from "../../controllers/UserController/controller.user.js";

const router = express.Router();

router.get("/", register);
export default router;
