const Admin = require("../domain/entities/admin");

class AdminService {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }

  async createAdmin(adminDto) {
    console.log(adminDto)
    const admin = new Admin(
      null,
      adminDto.username,
      adminDto.password,
      false
    );
    console.log(admin);
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
