import { AppError } from '../../../shared/error/AppError';
import { encode } from '../../../utils/Hash';
import { generateToken } from '../../../utils/Token';
import { UserSignInDTO, UserSignUpDTO } from '../dtos';
import { getRepository } from 'typeorm';
import { User } from '../../../entity';
import { authConfig } from '../../../config/auth';

export class UserService {
  async signin(user: UserSignInDTO) {
    const userRepository = getRepository(User);
    const { email, password } = user;
    const passwordHash = encode(password);

    const existUser = await userRepository.findOne({
      relations: ['account'],
      where: { email, password: passwordHash },
    });

    if (!existUser) {
      throw new AppError('Usuário não encontrado', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const { id, firstName, lastName, account } = existUser;
    const body = {
      firstName,
      lastName,
      accountNumber: account.number,
      accountDigit: account.digit,
      wallet: account.wallet,
    };
    const validate = {
      subject: id,
      expiresIn,
    };
    const token = generateToken(body, secret, validate);

    // @ts-expect-error ignore
    delete existUser.password;

    return { accessToken: token };
  }

  async signup(user: UserSignUpDTO) {}
}
