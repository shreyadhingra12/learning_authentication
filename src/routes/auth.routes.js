const express = require("express");
const authController = require("../contollers/auth.controller");
const routes = express.Router();

// post/register->api isko access karna h toh /api/auth/register
routes.post("/register", authController.registerUser);

module.exports = routes;
