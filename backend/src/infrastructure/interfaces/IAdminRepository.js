const AdminRepository = require("../../domain/repositories/AdminRepository");
const AdminModel = require("../models/admin");

class IAdminRepository extends AdminRepository {
  async save(admin) {
    const adminModel = new AdminModel(admin);
    await adminModel.save();
    return adminModel;
  }

  async findAll() {
    return await AdminModel.find();
  }
}

module.exports = IAdminRepository;
