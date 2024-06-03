const IFeedbackRepository = require("../../infrastructure/interfaces/IFeedbackRepository");
const FeedbackModel = require("../../infrastructure/models/feedback");
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
