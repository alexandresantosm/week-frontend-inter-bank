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
    const userData = req.body;
    const userService = new UserService();
    const userCreated = await userService.signup(userData);

    res.status(201).send(userCreated);
  }

  async me(req: Request, res: Response) {
    const user = req.user;
    const userService = new UserService();
    const currentUser = await userService.me(user);
    return res.status(200).send(currentUser);
  }
}
