import mongoose from 'mongoose';
import { User } from './interfaceUser';
import { userSchema } from './schemaUser';

export const UserModel = mongoose.model<User>('User', userSchema);
