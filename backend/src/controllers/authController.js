const AuthService = require("../services/authService");
const AuthRepository = require("../repositories/AuthRepository");

const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);

exports.register = async (req, res) => {
  //Validate both fields and return single response in helper function
  if (!req.body.username || !req.body.password) {
    return res
      .status(404)
      .json({ error: "Username and password field is required." });
  }

  try {
    //Check if admin exists b efore registering
    //..
    //....
    //If admin doesnt exist,register new admin
    const admin = await authService.register(
      req.body.username,
      req.body.password
    );
    return res.status(201).json(admin);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  //Validate both fields and return single response in helper function
  if (!req.body.username) {
    return res.status(404).json({ error: "Username field is required." });
  }
  if (!req.body.password) {
    return res.status(404).json({ error: "Password field is required." });
  }
  try {
    const auth = await authService.login(req.body.username, req.body.password);
    res.status(200).json(auth);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
