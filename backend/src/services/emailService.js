/* EmailService , service to handle emails when a user submits feedback.*/
class EmailService {
  constructor(emailRepository) {
    this.emailRepository = emailRepository;
  }

  async sendEmail(fullname, message) {
    return await this.emailRepository.send(fullname, message);
  }
}

module.exports = EmailService;
