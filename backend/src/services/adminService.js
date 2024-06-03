/* Admin service  to handle user administrative processes such 
as getAlladmins and deleting an existing admin */
class AdminService {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }
  async getAlladmins() {
    return await this.adminRepository.findAll();
  }
  async deleteAdmin() {
    return await this.adminRepository.deleteById();
  }
}

module.exports = AdminService;
