import { AppError } from '../../../shared/error/AppError';
import { encode } from '../../../utils/Hash';
import { UserSignInDTO, UserSignUpDTO } from '../dtos';
import { getRepository } from 'typeorm';
import { User } from '../../../entity';

export class UserService {
  async signin(user: UserSignInDTO) {
    const userRepository = getRepository(User);
    const { email, password } = user;
    const passwordHash = encode(password);

    const existUser = await userRepository.findOne({
      where: { email, password: passwordHash },
    });

    if (!existUser) {
      throw new AppError('Usuário não encontrado', 401);
    }

    return existUser;
  }

  async signup(user: UserSignUpDTO) {}
}
