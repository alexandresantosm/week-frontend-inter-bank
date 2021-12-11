import { Request, Response } from 'express';
import { UserService } from '../services';

export class UserController {
  async signin(req: Request, res: Response) {
    const { email, password } = req.body;
    const userService = new UserService();
    const user = await userService.signin({ email, password });

    res.status(200).send(user);
  }

  async signup(req: Request, res: Response) {
    return res.send('Cadastrando um usuário');
  }

  async me(req: Request, res: Response) {
    return res.send('Mostrando dados do usuário');
  }
}
