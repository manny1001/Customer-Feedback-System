const mongoose = require("mongoose");
class FeedbackService {
  constructor(feedbackRepository) {
    this.feedbackRepository = feedbackRepository;
  }

  async createFeedback(feedbackDto) {
    return await this.feedbackRepository.save(feedbackDto);
  }

  async getAllFeedback() {
    return await this.feedbackRepository.findAll();
  }
}

module.exports = FeedbackService;
