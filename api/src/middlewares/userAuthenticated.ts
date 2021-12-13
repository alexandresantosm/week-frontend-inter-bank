import { Request, Response, NextFunction } from 'express';
import { decodeToken } from '../utils/Token';
import { AppError } from '../shared/error/AppError';

interface ITokenPayload {
  firstName: string;
  lastName: string;
  iat: number;
  exp: number;
  sub: string;
}

export const userAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Não foi enviado o JWT', 401);
  }

  const [type, token] = authHeader.split(' ');

  isInvalidToken(type);

  try {
    const decodedToken = decodeToken(token);
    const { firstName, lastName, sub } = decodedToken as ITokenPayload;

    req.user = {
      id: sub,
      firstName,
      lastName,
    };

    return next();
  } catch {
    throw new AppError('Token JWT inválido', 401);
  }
};

function isInvalidToken(type: string) {
  if (type !== 'Bearer') {
    throw new AppError('Token JWT inválido', 401);
  }
}
