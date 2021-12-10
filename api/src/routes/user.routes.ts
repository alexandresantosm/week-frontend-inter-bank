import { Request, Response, Router } from 'express';

const userRouter = Router();

userRouter.post('/signin', (req: Request, res: Response) => {
  return res.send('Entrando com o usuário');
});

userRouter.post('/signup', (req: Request, res: Response) => {
  return res.send('Cadastrando um usuário');
});

userRouter.get('/me', (req: Request, res: Response) => {
  return res.send('Mostrando dados do usuário');
});

export { userRouter };
