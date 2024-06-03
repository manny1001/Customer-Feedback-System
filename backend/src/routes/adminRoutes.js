const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

//#region
/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Admin
 *     description: Get all administrators
 *     responses:
 *       200:
 *         description: List of administrators
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Admin'
 */
router.get("/getall", authMiddleware.protected, adminController.getAllAdmins);
//#endregion

//#region
/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Admin
 *     description: Flag a admin user as deleted
 *     responses:
 *       200:
 *         description: Flag a admin user as deleted
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Admin'
 */
router.post(
  "/deleteAdmin",
  authMiddleware.protected,
  adminController.deleteAdmin
);
//#endregion
module.exports = router;
