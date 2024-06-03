const FeedbackService = require("../services/feedbackService");
const FeedbackRepository = require("../repositories/FeedbackRepository");

const feedbackRepository = new FeedbackRepository();
const feedbackService = new FeedbackService(feedbackRepository);

const EmailService = require("../services/EmailService");
const EmailRepository = require("../repositories/EmailRepository");

const emailRepository = new EmailRepository();
const emailService = new EmailService(emailRepository);

exports.createFeedback = async (req, res) => {
  if (!req.body.fullname || !req.body.message) {
    return res.status(404).json({ error: "Fullname and message is required." });
  }

  try {
    const body = {
      id: null,
      fullname: req.body.fullname,
      message: req.body.message,
      createdAt: new Date(),
    };
    const feedback = await feedbackService.createFeedback(body);
    try {
      const email = await emailService.sendEmail();
      console.log(email);
      return res.status(200).json(feedbacks);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
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
