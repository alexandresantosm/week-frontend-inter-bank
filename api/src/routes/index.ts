import { Router } from 'express';
import { userRouter } from './user.routes';
import { transactionRouter } from './transaction.routes';

const routes = Router();
routes.use('/user', userRouter);
routes.use('/pix', transactionRouter);

export { routes };
