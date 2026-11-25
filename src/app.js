const express = require('express');

const app = express();
app.use(express.json()); //middleware


app.use("/api/auth", authRoutes)//prefix
module.exports = app;