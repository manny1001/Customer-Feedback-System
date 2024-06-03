const AdminService = require("../services/adminService");
const AdminRepository = require("../domain/repositories/AdminRepository");

const adminRepository = new AdminRepository();
const adminService = new AdminService(adminRepository);
//delete

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await adminService.getAlladmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
