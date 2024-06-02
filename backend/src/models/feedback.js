const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    customerId: { type: String, required: true },
    comments: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);
