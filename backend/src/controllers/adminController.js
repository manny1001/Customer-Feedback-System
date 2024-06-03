const AdminService = require("../services/adminService");
const MongoAdminRepository = require("../infrastructure/repositories/MongoAdminRepository");

const adminRepository = new MongoAdminRepository();
const adminService = new AdminService(adminRepository);

exports.createAdmin = async (req, res) => {
  try {
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

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await adminService.getAlladmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
