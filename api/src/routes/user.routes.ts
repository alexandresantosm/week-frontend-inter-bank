import { Router } from 'express';
import { UserController } from '../resources/user/controllers';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/signin', userController.signin);

userRouter.post('/signup', userController.signup);

userRouter.get('/me', userController.me);

export { userRouter };
