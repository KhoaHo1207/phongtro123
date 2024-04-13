import express from "express";
import * as authController from "../controllers/auth";
const router = express.Router(); // viet nhung cai route lien quan den xac thuc
router.post("/login", authController.login);
router.post("/register", authController.register);
export default router;
