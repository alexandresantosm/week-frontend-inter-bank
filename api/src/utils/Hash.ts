import md5 from 'crypto-js/md5';

export const encodeHash = (value: string) => {
  return md5(value).toString();
};
