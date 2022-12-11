import { Router } from 'express';
import { signupController } from '../controllers/signupController';
import { getUserController } from '../controllers/userControllers';
import { userValidator } from '../utils/userValidator';

const router: Router = Router();

router.route('/api/auth').post(userValidator, signupController).get(getUserController);

export default router;
