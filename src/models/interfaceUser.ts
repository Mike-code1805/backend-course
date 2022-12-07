export interface User {
  username: string;
  email: string;
  password: string;
  phone: number;
  isValid: boolean;
}

export type CreateUser = Omit<User, 'isValid'>;
