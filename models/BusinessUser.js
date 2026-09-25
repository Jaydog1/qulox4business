import mongoose from 'mongoose'

const BusinessUserSchema = new mongoose.Schema(
  {
    quloxId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
    },
    profileImage: String,
    bio: String,
    company: String,
    position: String,
    location: String,
    website: String,
    industry: String,
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessUser',
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BusinessUser',
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
    hasBusinessAccess: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

export default mongoose.models.BusinessUser ||
  mongoose.model('BusinessUser', BusinessUserSchema)
