const AuthRepository = require("../../domain/repositories/AuthRepository");
const AdminModel = require("../models/admin");
const { hashPassword, comparePassword } = require("../../utils/passwordHasher");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

class IAuthRepository extends AuthRepository {
  async register(username, password) {
    const hashedPassword = await hashPassword(password);
    const admin = new AdminModel({ username, password: hashedPassword });
    await admin.save();
    return admin;
  }
  async login(username, password) {
    const admin = await AdminModel.findOne({ username });
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

module.exports = IAuthRepository;
