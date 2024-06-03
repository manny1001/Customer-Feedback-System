const express = require("express");
const setupSwagger = require("./utils/swagger");
const feedbackRoutes = require("./routes/feedbackRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");


const app = express();

app.use(express.json());

setupSwagger(app);

app.use("/api/v1/feedback", feedbackRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/auth", authRoutes);


module.exports = app;
