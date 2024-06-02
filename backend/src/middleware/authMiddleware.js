const jwt = require("jsonwebtoken");
const AdminUser = require("../infrastructure/models/admin");
const ApiKey = require("../infrastructure/models/apiKey");

const protected = async (req, res, next) => {
  let token;
  const apiKey = req.header("x-api-key");
  const authorization = req.headers.authorization;
  //Check for autherization header and that it is of type Bearer Token
  if (authorization && authorization.startsWith("Bearer")) {
    //assign token from header to variable
    token = authorization.split(" ")[1];
  }
  //No token exists , return error
  if (!token) {
    return res.status(401).json({ error: "Not authorized" });
  }
  //Token exists
  try {
    const adminUser = await AdminUser.findOne({ apiKey });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.AdminUser = await adminUser.findById(decoded.id).select("-password");
    if (!req.AdminUser) {
      return res
        .status(401)
        .send("Unauthorized: Invalid API key or Invalid User");
    }
    // Rate limiting logic:
    const today = new Date().toISOString().split("T")[0];
    const usageIndex = user.usage.findIndex((day) => day.date === today);

    if (usageIndex >= 0) {
      if (
        user.usage[usageIndex].count >= user.rateLimit ||
        user.rateLimit === 0
      ) {
        return res.status(429).send("Too many requests");
      }
      user.usage[usageIndex].count++;
    } else {
      user.usage.push({ date: today, count: 1 });
    }
    next();
  } catch (error) {
    return res.status(401).json({ error: "Not authorized" });
  }
};

module.exports = {
  protected,
};
