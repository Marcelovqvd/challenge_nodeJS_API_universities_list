import mongoose, { Document, Schema, Model} from 'mongoose';

type University = Document & {};

const UniversitySchema = new Schema(
  {
    alpha_two_code: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true,
    },
    web_pages: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    country: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true,
    },
    domains: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    state_province: {
      type: String,
      lowercase: true,
      trim: true,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<University>('University', UniversitySchema);