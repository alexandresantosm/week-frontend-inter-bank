import { Request, Response } from 'express';
import { TransactionService } from '../services/transaction.service';

export class TransactionController {
  async request(req: Request, res: Response) {
    const transactionService = new TransactionService();
    const { value } = req.body;
    const user = req.user;
    const requestKey = await transactionService.request(value, user);
    return res.status(201).send({ copyPasteKey: requestKey });
  }

  async pay(req: Request, res: Response) {
    const transactionService = new TransactionService();
    const { key } = req.params;
    const user = req.user;
    const payment = await transactionService.pay(key, user);
    return res.status(201).send(payment);
  }

  async transactions(req: Request, res: Response) {
    const transactionService = new TransactionService();
    const user = req.user;

    const transactions = await transactionService.transactions(user);
    return res.status(200).send(transactions);
  }
}
