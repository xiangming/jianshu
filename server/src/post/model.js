import mongoose from 'mongoose';

// Define the model
const Schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  title: String,
  content: String,
  excerpt: String,
  words_count: {
    type: Number,
    default: 0,
  },
  views_count: {
    type: Number,
    default: 0,
  },
  comments_count: {
    type: Number,
    default: 0,
  },
  likes_count: {
    type: Number,
    default: 0,
  },
  list_image_url: String,
  user_id: Number,
});

// Export the model
export default mongoose.model('Post', Schema);
