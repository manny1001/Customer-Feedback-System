const Admin = require("../entities/admin");
const { hashPassword } = require("../utils/passwordHasher");
class AdminService {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }
  async getAlladmins() {
    return await this.adminRepository.findAll();
  }
}

module.exports = AdminService;
