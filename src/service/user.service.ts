import { DocumentDefinition } from 'mongoose';
import UserModel, { UserDocument } from '../models/user.modul';

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, 'createdAt' | 'updatedAt' | 'passwordConfirmation'>
  >
) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
