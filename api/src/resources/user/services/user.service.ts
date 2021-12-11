import { AppError } from '../../../shared/error/AppError';
import {
  encode,
  generateAccountDigit,
  generateToken,
  generateAccountNumber,
} from '../../../utils';
import { UserSignInDTO, UserSignUpDTO } from '../dtos';
import { getRepository } from 'typeorm';
import { Account, User } from '../../../entity';
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

  async signup(user: UserSignUpDTO) {
    const userRepository = getRepository(User);
    const existUser = await userRepository.findOne({
      where: { email: user.email },
    });

    if (existUser) {
      throw new AppError('Já existe um usuário cadastrado com esse email', 401);
    }

    const passwordHash = encode(user.password);
    const newAccount = new Account();
    newAccount.number = generateAccountNumber();
    newAccount.digit = generateAccountDigit();

    const userData = new User();
    userData.firstName = user.firstName;
    userData.lastName = user.lastName;
    userData.email = user.email;
    userData.password = passwordHash;
    userData.account = newAccount;

    const userCreated = await userRepository.save(userData);
    const { secret, expiresIn } = authConfig.jwt;

    const { id, firstName, lastName, account } = userCreated;
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

    return { accessToken: token };
  }
}
