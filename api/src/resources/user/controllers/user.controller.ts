import { Request, Response } from 'express';

export class UserController {
  async signin(req: Request, res: Response) {
    return res.send('Entrando com o usuário');
  }

  async signup(req: Request, res: Response) {
    return res.send('Cadastrando um usuário');
  }

  async me(req: Request, res: Response) {
    return res.send('Mostrando dados do usuário');
  }
}
