const express = require("express");
const setupSwagger = require("./utils/swagger");
const v1feedbackRoutes = require("./routes/feedbackRoutes");
const v1adminRoutes = require("./routes/adminRoutes");
const v1authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const app = express();

app.use(express.json());

setupSwagger(app);

app.use("/api/v1/feedback", v1feedbackRoutes);
app.use("/api/v1/admin", v1adminRoutes);
app.use("/api/v1/auth", v1authRoutes);
app.use(cors());
module.exports = app;
