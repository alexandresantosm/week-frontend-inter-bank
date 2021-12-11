export const authConfig = {
  jwt: {
    secret: process.env.API_SECRET || 'default',
    expiresIn: '14d',
  },
};
