class Feedback {
  constructor(id, fullname, message, rating, createdAt) {
    this.id = id;
    this.fullname = fullname;
    this.message = message;
    this.createdAt = createdAt;
  }
}

module.exports = Feedback;
