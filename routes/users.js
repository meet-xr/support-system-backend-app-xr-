const express = require("express");
const router = express.Router();
const cleanBody = require("../middlewares/cleanbody");
const AuthController = require("../src/users/user.controller");
const { validateToken } = require("../middlewares/validateToken");
//Define endpoints
router.post("/signup", cleanBody, AuthController.Signup);
router.post("/login", cleanBody, AuthController.Login);
router.patch("/forgot", cleanBody, AuthController.ForgotPassword);
router.patch("/reset", cleanBody, AuthController.ResetPassword);
router.get("/logout", validateToken, AuthController.Logout);

module.exports = router;