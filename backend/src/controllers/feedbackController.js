const FeedbackService = require("../services/feedbackService");
const MongoFeedbackRepository = require("../infrastructure/repositories/MongoFeedbackRepository");

const feedbackRepository = new MongoFeedbackRepository();
const feedbackService = new FeedbackService(feedbackRepository);

exports.createFeedback = async (req, res) => {
  try {
    console.log('req',req);

    const body = {
      id :null,
      fullname: req.body.fullname,
      message: req.body.message,
      createdAt : new Date()
    };
    console.log('body',body);
    const feedback = await feedbackService.createFeedback(body);

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await feedbackService.getFeedbackById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    res.status(200).json(feedback);
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
