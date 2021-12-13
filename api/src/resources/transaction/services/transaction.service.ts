import { getRepository } from 'typeorm';
import { decodeKey, encodeKey } from '../../../utils/Transaction';

import { Account, Transaction, User } from '../../../entity';
import { AppError } from '../../../shared/error/AppError';

export class TransactionService {
  async request(value: number, user: Partial<User>) {
    const userRepository = getRepository(User);
    const currentUser = await userRepository.findOne({
      where: { id: user.id },
    });

    if (!currentUser) {
      throw new AppError('Usuário não encontrado', 401);
    }

    const transactionRepository = getRepository(Transaction);
    const requestData = {
      requestingUser: currentUser,
      value,
      status: 'open',
    };
    const transaction = await transactionRepository.save(requestData);
    const key = encodeKey(user.id || '', value, transaction.id);

    return key;
  }

  async pay(key: string, user: Partial<User>) {
    const { userId, value, transactionId } = decodeKey(key);

    if (userId === user.id) {
      throw new AppError('Não é possível receber PIX do mesmo usuário');
    }

    const userRepository = getRepository(User);
    const payingUser = await userRepository.findOne({
      relations: ['account'],
      where: { id: user.id },
    });

    const walletPayingUser = payingUser?.account.wallet;

    if (walletPayingUser && walletPayingUser < Number(value)) {
      throw new AppError(
        'Não há saldo suficiente para efetuar o pagamento',
        401,
      );
    }

    const requestingUser = await userRepository.findOne({
      relations: ['account'],
      where: { id: userId },
    });

    if (!payingUser || !requestingUser) {
      throw new AppError(
        'Não encontramos os clientes da transação, gere uma nova chave',
        401,
      );
    }

    const accountRepository = getRepository(Account);
    const accountRequestingUser = await accountRepository.findOne({
      where: { id: requestingUser.account.id },
    });
    const accountPayingUser = await accountRepository.findOne({
      where: { id: payingUser.account.id },
    });

    if (!accountRequestingUser || !accountPayingUser) {
      throw new AppError('Não encontramos as contas para a transação', 401);
    }

    accountRequestingUser.wallet += Number(value);
    await accountRepository.save(accountRequestingUser);
    accountPayingUser.wallet -= Number(value);
    await accountRepository.save(accountPayingUser);

    const transactionRepository = getRepository(Transaction);
    const transactionPix = await transactionRepository.findOne({
      where: { id: transactionId, status: 'open' },
    });

    if (!transactionPix) {
      throw new AppError(
        'Não encontramos uma transação ativa, gere uma nova chave',
        401,
      );
    }

    transactionPix.status = 'close';
    transactionPix.payingUser = payingUser;
    await transactionRepository.save(transactionPix);

    return { msg: 'Pagamento efetuado com sucesso' };
  }

  async transactions(user: Partial<User>) {
    const transactionRepository = getRepository(Transaction);
    const transactionReceived = await transactionRepository.find({
      where: { requestingUser: user.id, status: 'close' },
      relations: ['payingUser'],
    });
    const transactionPaying = await transactionRepository.find({
      where: { payingUser: user.id, status: 'close' },
      relations: ['requestingUser'],
    });
    const received = transactionReceived.map(transaction => ({
      value: transaction.value,
      user: {
        firstName: transaction.payingUser.firstName,
        lastName: transaction.payingUser.lastName,
      },
      updatedAt: transaction.updatedAt,
      type: 'received',
    }));
    const paying = transactionPaying.map(transaction => ({
      value: transaction.value,
      user: {
        firstName: transaction.payingUser.firstName,
        lastName: transaction.payingUser.lastName,
      },
      updatedAt: transaction.updatedAt,
      type: 'paid',
    }));
    const allTransactions = [...received, ...paying];
    allTransactions.sort(function (a, b) {
      const dateA = new Date(a.updatedAt).getTime();
      const dateB = new Date(b.updatedAt).getTime();
      return dateA < dateB ? 1 : -1;
    });

    return allTransactions;
  }
}
