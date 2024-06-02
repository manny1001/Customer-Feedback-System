const AdminService = require("../services/adminService");
const MongoAdminRepository = require("../infrastructure/repositories/MongoAdminRepository");

const adminRepository = new MongoAdminRepository();
const adminService = new AdminService(adminRepository);

exports.createAdmin = async (req, res) => {
  try {
    console.log('req',req)
    const body = {
      username: req.body.name,
      password: req.body.password,
      isDeleted: req.body.isDeleted,
    };
    const admin = await adminService.createAdmin(body);

    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
