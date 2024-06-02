const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
class FeedbackService {
  constructor(feedbackRepository) {
    this.feedbackRepository = feedbackRepository;
  }

  async createFeedback(feedbackDto) {
    return await this.feedbackRepository.save(feedbackDto);
  }

  async getFeedbackById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return;
    }

    return await this.feedbackRepository.findById(id);
  }

  async getAllFeedback() {
    return await this.feedbackRepository.findAll();
  }
}

module.exports = FeedbackService;
