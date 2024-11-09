const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  videoUrl: { type: String }, // URL of the uploaded video
  thumbnailUrl: { type: String }, // URL of the video thumbnail
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }, // Timestamp of recipe creation
});

module.exports = mongoose.model('Recipe', RecipeSchema);
