const FeedbackService = require("../services/feedbackService");
const MongoFeedbackRepository = require("../infrastructure/repositories/MongoFeedbackRepository");

const feedbackRepository = new MongoFeedbackRepository();
console.log(feedbackRepository);
const feedbackService = new FeedbackService(feedbackRepository);

exports.createFeedback = async (req, res) => {
  try {
    const body = {
      userId: req.body.customerId,
      message: req.body.comments,
      rating: req.body.rating,
    };
    const feedback = await feedbackService.createFeedback(body);
    feedback
      .save()
      .then((savedFeedback) => {
        console.log(savedFeedback);
      })
      .catch((error) => {
        console.error(error);
      });

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
