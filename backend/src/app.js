const express = require("express");
const setupSwagger = require("./utils/swagger");
const feedbackRoutes = require("./routes/feedbackRoutes");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

setupSwagger(app);

app.use("/api/v1/feedback", feedbackRoutes);

module.exports = app;
