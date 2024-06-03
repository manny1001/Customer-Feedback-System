const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

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

module.exports = router;
