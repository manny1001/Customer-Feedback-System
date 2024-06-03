const AuthService = require("../services/authService");
const IAuthRepository = require("../infrastructure/interfaces/IAuthRepository");

const authRepository = new IAuthRepository();
const authService = new AuthService(authRepository);

exports.register = async (req, res) => {
  try {
    const admin = await authService.register(
      req.body.username,
      req.body.password
    );
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const auth = await authService.login(req.body.username, req.body.password);
    res.status(200).json(auth);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
