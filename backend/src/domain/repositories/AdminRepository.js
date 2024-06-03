const IAdminRepository = require("../../infrastructure/interfaces/IAdminRepository");
const AdminModel = require("../../infrastructure/models/admin");

class AdminRepository extends IAdminRepository {
  async save(admin) {
    const adminModel = new AdminModel(admin);
    await adminModel.save();
    return adminModel;
  }

  async findAll() {
    return await AdminModel.find();
  }
}

module.exports = AdminRepository;
