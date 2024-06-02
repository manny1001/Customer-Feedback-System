const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ApiKey = require("../models/apiKey");

const protected = async (req, res, next) => {
  let token;
  const apiKey = req.header("x-api-key");
  //If no api key exists in header with name 'x-api-key' , return error response
  if (!apiKey) {
    return res.status(401).json({ message: "API key is missing" });
  }
  //If key exists but is not a vaild api key that exists , return error response
  const keyExists = await ApiKey.findOne({ key: apiKey });
  if (!keyExists) {
    return res.status(403).json({ message: "Invalid API key" });
  }
  const authorization =   req.headers.authorization
  //Check for autherization header and that it is of type Bearer Token
  if (
    authorization &&
    authorization.startsWith("Bearer")
  ) {
    //assign token from header to variable
    token = authorization.split(" ")[1];
  }
  //No token exists , return error
  if (!token) {
    return res.status(401).json({ error: "Not authorized" });
  }
  //Token exists
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    return res.status(401).json({ error: "Not authorized" });
  }
};

module.exports = {
  protected,
};
