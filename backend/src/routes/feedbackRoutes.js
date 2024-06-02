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
router.post("/", feedbackController.createFeedback);

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
router.get("/", authMiddleware.protected, feedbackController.getAllFeedback);

/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - Feedback by ID
 *     description: Get all feedback
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  "/:id",
  authMiddleware.protected,
  feedbackController.getFeedbackById
);

module.exports = router;
