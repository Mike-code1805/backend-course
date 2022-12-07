import { Router } from 'express';
import { signupController } from '../controllers/signupController';
import { getUserController } from '../controllers/userControllers';

const router: Router = Router();

router.route('/users').post(signupController).get(getUserController);

export default router;
