import { sign, verify } from 'jsonwebtoken';
import { authConfig } from '../config/auth';

const { expiresIn, secret } = authConfig.jwt;

export const generateToken = (body: Object, subject: string) => {
  const validate = {
    subject,
    expiresIn,
  };
  return sign(body, secret, validate);
};

export const decodeToken = (token: string) => {
  return verify(token, secret);
};
