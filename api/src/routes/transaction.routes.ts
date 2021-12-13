import { Router } from 'express';
import { userAuthenticated } from '../middlewares/userAuthenticated';
import { TransactionController } from '../resources/transaction/controllers';

const transactionRouter = Router();
const transactionController = new TransactionController();
transactionRouter.use(userAuthenticated);

transactionRouter.post('/request', transactionController.request);
transactionRouter.post('/pay', transactionController.pay);
transactionRouter.get('/transactions', transactionController.transactions);

export { transactionRouter };
