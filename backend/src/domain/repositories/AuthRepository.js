const IAuthRepository = require("../../infrastructure/interfaces/IAuthRepository");
const AdminModel = require("../../infrastructure/models/admin");
const { hashPassword, comparePassword } = require("../../utils/passwordHasher");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

class AuthRepository extends IAuthRepository {
  async register(username, password) {
    const hashedPassword = await hashPassword(password);
    const admin = new AdminModel({ username, password: hashedPassword });
    await admin.save();
    return admin;
  }
  async login(username, password) {
    const admin = await AdminModel.findOne({ password });
    console.log(admin);
    if (!admin) {
      throw new Error("User not found");
    }
    const isPasswordValid = comparePassword(password, admin.password);
    console.log(isPasswordValid);
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
    console.log(token);
    return { token, username };
  }
}

module.exports = AuthRepository;
