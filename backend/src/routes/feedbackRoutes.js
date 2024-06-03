const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const authMiddleware = require("../middleware/authMiddleware");
/**
 * @swagger
 * /:
 *   post:
 *     tags:
 *       - Feedback
 *     description: Submit customer feedback
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Feedback'
 *     responses:
 *       201:
 *         description: Feedback submitted successfully
 */
router.post("/create", feedbackController.createFeedback);

/**
 * @swagger
 /:
 *   get:
 *     tags:
 *       - Feedback
 *     description: Get all feedback
 *     responses:
 *       200:
 *         description: A list of feedback
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Feedback'
 */
router.get("/getall", authMiddleware.protected, feedbackController.getAllFeedback);

module.exports = router;
