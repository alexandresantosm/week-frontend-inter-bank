import { Request, Response } from 'express';

export class TransactionController {
  async request(req: Request, res: Response) {
    res.send('Generate key PIX');
  }

  async pay(req: Request, res: Response) {
    res.send('Paying with PIX');
  }

  async transactions(req: Request, res: Response) {
    res.send('Show all user transactions');
  }
}
