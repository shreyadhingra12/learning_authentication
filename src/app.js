const express = require('express');
const authRoutes = require("./routes/auth.routes")

const app = express();
app.use(express.json()); //middleware


app.use("/api/auth", authRoutes)//prefix
module.exports = app;