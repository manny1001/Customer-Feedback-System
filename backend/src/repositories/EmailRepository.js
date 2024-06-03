const IEmailRepository = require("../interfaces/IEmailRepository");
const { sendEmail } = require("../utils/emailer");

class EmailRepository extends IEmailRepository {
  async send(fullname, message) {
    const response = await sendEmail(fullname, message);
    return response;
  }
}

module.exports = EmailRepository;
