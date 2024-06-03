const jwt = require("jsonwebtoken");
const AdminUser = require("../infrastructure/models/admin");
const ApiKey = require("../infrastructure/models/apiKey");

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

  const apiExists = await ApiKey.findOne({ key: "YOUR_GENERATED_API_KEY" });
  if (apiExists) {
    token = authHeader.split(" ")[1];
  }
  next();
  return token;
};

module.exports = {
  protected,
};
