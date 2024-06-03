const IAdminRepository = require("../interfaces/IAdminRepository");
const AdminModel = require("../models/admin");

class AdminRepository extends IAdminRepository {
  async findAll() {
    return await AdminModel.find();
  }
}

module.exports = AdminRepository;
