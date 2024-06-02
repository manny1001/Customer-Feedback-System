const Admin = require("../domain/entities/admin");
const bcrypt = require("bcrypt");
class AdminService {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }

  async createAdmin(adminDto) {
    const admin = new Admin(
      null,
      adminDto.username,
      await bcrypt.hash(adminDto.password, 10),
      false
    );
    return await this.adminRepository.save(admin);
  }

  async getadminById(id) {
    return await this.adminRepository.findById(id);
  }

  async getAlladmins() {
    return await this.adminRepository.findAll();
  }
}

module.exports = AdminService;
