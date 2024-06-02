const Feedback = require("../domain/entities/feedback");

class FeedbackService {
  constructor(feedbackRepository) {
    this.feedbackRepository = feedbackRepository;
  }

  async createFeedback(feedbackDto) {
    return await this.feedbackRepository.save(feedbackDto);
  }

  async getFeedbackById(id) {
    return await this.feedbackRepository.findById(id);
  }

  async getAllFeedback() {
    return await this.feedbackRepository.findAll();
  }
}

module.exports = FeedbackService;
