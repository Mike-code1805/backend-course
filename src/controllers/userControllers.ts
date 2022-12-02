import { Request, Response } from 'express';
import { database } from '../db/db';
import { User } from '../types/userType';

let db = database;

export const getUserController = (req: Request, res: Response) => {
  res.status(200).send(db);
};

export const createUserController = (req: Request, res: Response) => {
  const user: User = req.body;
  user._id = Date.now();
  db.push(user);
  res.status(200).send({ data: user });
};

export const editUserController = (req: Request, res: Response) => {
  const newUser = req.body;
  const { id } = req.params;
  db = db.map((user) => {
    if (user._id === parseInt(id)) {
      return {
        ...user,
        ...newUser,
      };
    } else {
      return user;
    }
  });
  res.status(200).send('User updated');
};

export const deleteUserController = (req: Request, res: Response) => {
  const { id } = req.params;
  db = db.filter((user) => user._id !== parseInt(id));

  res.status(200).send('User deleted');
};
