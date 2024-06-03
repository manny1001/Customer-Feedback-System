const FeedbackRepository = require("../../domain/repositories/FeedbackRepository");
const FeedbackModel = require("../models/feedback");

class MongoFeedbackRepository extends FeedbackRepository {
  async save(feedback) {
    const feedbackModel = new FeedbackModel(feedback);
    await feedbackModel.save();
    return feedbackModel;
  }


  async findAll() {
    return await FeedbackModel.find();
  }
}

module.exports = MongoFeedbackRepository;
