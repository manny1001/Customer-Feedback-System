const ApiKey = require("../models/apiKey");
const dotenv = require("dotenv");
dotenv.config();
const protected = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const apiKey = req.headers["x-api-key"] || req.query.apiKey;
  let token = "";
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized Token or API Key" });
  }
  if (!apiKey) {
    return res.status(401).json({ message: "No API KEY" });
  }

  const apiExists = await ApiKey.findOne({ key: process.env.CFS_API_KEY });
  if (apiExists) {
    token = authHeader.split(" ")[1];
  }
  next();
  return token;
};

module.exports = {
  protected,
};
