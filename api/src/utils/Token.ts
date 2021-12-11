import { sign } from 'jsonwebtoken';

interface ValidateProps {
  subject: string;
  expiresIn: string;
}

export const generateToken = (
  body: Object,
  secret: string,
  validate: ValidateProps,
) => {
  return sign(body, secret, validate);
};
