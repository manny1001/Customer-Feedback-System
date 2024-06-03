const IAuthRepository = require("../interfaces/IAuthRepository");
const AdminModel = require("../models/admin");
const { hashPassword, comparePassword } = require("../utils/passwordHasher");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const JWT_SECRET = process.env.JWT_SECRET;
dotenv.config();

class AuthRepository extends IAuthRepository {
  async register(username, password) {
    const hashedPassword = await hashPassword(password);
    const admin = new AdminModel({ username, password: hashedPassword });
    await admin.save();
    return admin;
  }
  async login(username, password) {
    const admin = await AdminModel.findOne({ password });
    if (!admin) {
      throw new Error("User not found");
    }
    const isPasswordValid = comparePassword(password, admin.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign(
      { userId: admin._id, username: username },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return { token, username };
  }
}

module.exports = AuthRepository;
