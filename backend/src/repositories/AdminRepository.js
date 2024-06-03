const { ObjectId } = require("mongodb");
const IAdminRepository = require("../interfaces/IAdminRepository");
const AdminModel = require("../models/admin");

class AdminRepository extends IAdminRepository {
  async findAll() {
    return await AdminModel.find();
  }
  async findOne() {
    return await AdminModel.findOne();
  }
  /* Note : It's better to flag as deleted , rather tha actually deleting the databse documemnt. For project requirement
  purposes the record will be deleted */
  async deleteById(Id) {
    const result = await AdminModel.deleteOne({
      _id: Id,
    });
    return result.deletedCount > 0;
  }
}

module.exports = AdminRepository;
