import mongoose from 'mongoose';

// Define the model
const Schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  nickname: String,
  avatar_source: String,
  total_likes_count: Number,
  total_words_count: Number,
  is_following_user: Boolean,
});

// Export the model
export default mongoose.model('User', Schema);
