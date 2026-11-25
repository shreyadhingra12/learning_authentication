const express = require("express")
const authController = require("../contollers/auth.controller")
const routes = express.Router();

// post/register->api
routes.post("/register",authController.registerUser)

module.exports= routes