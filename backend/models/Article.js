const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: { type: String, require: true },
  slug: { type: String, unique: true },
  content: { type: String, required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Article", articleSchema);
