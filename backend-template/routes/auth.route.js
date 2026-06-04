import express from "express";

import{
    loginController,
    registerController
} from "../controllers/auth/login.controller.js"
const router = express.Router()

router.post("/register",registerController);
router.post("/login",loginController);

export default router