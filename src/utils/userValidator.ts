import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../customError/ApplicationError';
import { CreateUser } from '../models/interfaceUser';

export const userValidator = (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.username) {
    next(new ApplicationError(404, 'username is required', 'User Validation'));
  }
  if (!req.body.email) {
    next(new ApplicationError(404, 'email is required', 'User Validation'));
  }
  if (!req.body.password) {
    next(new ApplicationError(404, 'password is required', 'User Validation'));
  }
  next();
};
