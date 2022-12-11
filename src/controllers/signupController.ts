import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../customError/ApplicationError';
import { CreateUser } from '../models/interfaceUser';
import { UserModel } from '../models/UserModel';
import { encryptPassword } from '../validators/passwordManager';

export const signupController = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password, email, phone } = req.body;
    req.body.password = await encryptPassword(password);
    const newUser = new UserModel({
      username,
      password: req.body.password,
      email,
      phone,
    });
    await newUser.save();
    res.status(200).send({ newUser });
  } catch (error) {
    next(
      new ApplicationError(400, 'Error in signupController', 'Register User')
    );
  }
};
