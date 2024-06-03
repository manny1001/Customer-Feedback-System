const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

/**
 * @swagger
 * /:
 *   post:
 *     tags:
 *       - Admin
 *     description: Add new admin user
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Admin'
 *     responses:
 *       201:
 *         description: Admin successfully added
 */
router.post("/add", authMiddleware.protected, adminController.createAdmin);

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
