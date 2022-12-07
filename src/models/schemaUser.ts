import mongoose from 'mongoose';
import { User } from './interfaceUser';

const Schema = mongoose.Schema;

export const userSchema = new Schema<User>(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    phone: Number,
    isValid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
