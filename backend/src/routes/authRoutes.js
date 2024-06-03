const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

//#region
/**
 * @swagger
 * /:
 *   post:
 *     tags:
 *       - Auth
 *     description: Register a new Admin
 *     responses:
 *       200:
 *         description: register Admin
 *         schema:
 *           type: object
 *           items:
 *             $ref: '#/definitions/Admin'
 */
router.post("/register", authMiddleware.protected, authController.register);
//#endregion

//#region
/**
 * @swagger
 * /:
 *   post:
 *     tags:
 *       - Auth
 *     description: Login as an admin
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
router.post("/login", authController.login);
//#endregion
module.exports = router;
