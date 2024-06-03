const Admin = require("../domain/entities/admin");
const bcrypt = require("bcrypt");
const { hashPassword } = require("../utils/passwordHasher");
class AdminService {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }
  async createAdmin(adminDto) {
    // Hash the password
    const hashedPassword = await hashPassword(adminDto.password);
    const admin = new Admin(null, adminDto.username, hashedPassword, false);

    return await this.adminRepository.save(admin);
  }

  async getAlladmins() {
    return await this.adminRepository.findAll();
  }
}

module.exports = AdminService;
