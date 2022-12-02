import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  editUserController,
  getUserController,
} from '../controllers/userControllers';

const router: Router = Router();

router.route('/users').get(getUserController).post(createUserController);
router.route('/users/:id').put(editUserController).delete(deleteUserController);

export default router;
