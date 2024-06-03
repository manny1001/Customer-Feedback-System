const FeedbackService = require("../services/feedbackService");
const FeedbackRepository = require("../domain/repositories/FeedbackRepository");

const feedbackRepository = new FeedbackRepository();
const feedbackService = new FeedbackService(feedbackRepository);

exports.createFeedback = async (req, res) => {
  try {
    const body = {
      id: null,
      fullname: req.body.fullname,
      message: req.body.message,
      createdAt: new Date(),
    };
    const feedback = await feedbackService.createFeedback(body);
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await feedbackService.getAllFeedback();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
