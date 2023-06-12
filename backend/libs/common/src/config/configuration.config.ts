export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRATION,
  },
  saltRounds: process.env.SALT_ROUNDS,
});
