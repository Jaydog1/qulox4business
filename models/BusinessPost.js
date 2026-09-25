import mongoose from 'mongoose'

const BusinessPostSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BusinessUser',
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 500,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['advice', 'announcement', 'discussion', 'news', 'question', 'opportunity'],
      default: 'discussion',
    },
    tags: [String],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessUser',
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessComment',
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

export default mongoose.models.BusinessPost ||
  mongoose.model('BusinessPost', BusinessPostSchema)
