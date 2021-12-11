const MAX_ACCOUNT_NUMBER = 999999;
const MAX_ACCOUNT_DIGIT = 99;

const generateAccountNumber = () =>
  Math.floor(Math.random() * MAX_ACCOUNT_NUMBER);
const generateAccountDigit = () =>
  Math.floor(Math.random() * MAX_ACCOUNT_DIGIT);

export { generateAccountNumber, generateAccountDigit };
