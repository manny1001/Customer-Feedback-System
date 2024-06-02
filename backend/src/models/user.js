class Feedback {
  constructor(id, userId, message, rating, createdAt) {
    this.id = id;
    this.userId = userId;
    this.message = message;
    this.rating = rating;
    this.createdAt = createdAt;
  }
}

module.exports = Feedback;

