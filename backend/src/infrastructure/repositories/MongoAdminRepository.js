const AdminRepository = require("../../domain/repositories/AdminRepository");
const AdminModel = require("../models/admin");

class MongoAdminRepository extends AdminRepository {
  async save(admin) {
    const adminModel = new AdminModel(admin);
    await adminModel.save();
    return admin;
  }

  async findById(id) {
    return await AdminModel.findById(id);
  }

  async findAll() {
    return await AdminModel.find();
  }

  async deleteById() {
    return await AdminModel.findById(id).then(
      (data) => (data.$isDeleted = true)
    );
  }
}

module.exports = MongoAdminRepository;
