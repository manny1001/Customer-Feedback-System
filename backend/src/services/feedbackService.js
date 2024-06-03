/* FeedbackService service to handle when usersubmiys feedback and getting all feedbacks on the system*/
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
