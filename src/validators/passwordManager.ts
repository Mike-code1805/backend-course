import bcrypt from 'bcrypt';

export const encryptPassword = async (pass: string): Promise<string> => {
  const salt = await bcrypt.genSalt(5);
  return await bcrypt.hash(pass, salt);
};
