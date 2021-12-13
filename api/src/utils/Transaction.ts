import { encode, decode } from 'js-base64';

export const encodeKey = (
  userId: string,
  value: number,
  transactionId: string,
) => {
  const part1 = encode(userId);
  const part2 = encode(value.toString());
  const part3 = encode(transactionId);

  return `${part1}-${part2}-${part3}`;
};

export const decodeKey = (key: string) => {
  const [part1, part2, part3] = key.split('-');
  const userId = decode(part1);
  const value = decode(part2);
  const transactionId = decode(part3);

  return { userId, value, transactionId };
};
