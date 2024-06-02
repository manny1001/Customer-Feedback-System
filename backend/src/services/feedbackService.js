const Feedback = require("../domain/entities/feedback");

class FeedbackService {
  constructor(feedbackRepository) {
    this.feedbackRepository = feedbackRepository;
  }

  async createFeedback(feedbackDto) {
    const feedback = new Feedback(
      null,
      feedbackDto.userId,
      feedbackDto.message,
      feedbackDto.rating
    );
    console.log(feedback);
    return await this.feedbackRepository.save(feedback);
  }

  async getFeedbackById(id) {
    return await this.feedbackRepository.findById(id);
  }

  async getAllFeedback() {
    return await this.feedbackRepository.findAll();
  }
}

module.exports = FeedbackService;
