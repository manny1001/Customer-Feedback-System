const IFeedbackRepository = require("../interfaces/IFeedbackRepository");
const FeedbackModel = require("../models/feedback");

class FeedbackRepository extends IFeedbackRepository {
  async save(feedback) {
    const feedbackModel = new FeedbackModel(feedback);
    await feedbackModel.save();
    return feedbackModel;
  }

  async findAll() {
    return await FeedbackModel.find();
  }
}

module.exports = FeedbackRepository;
