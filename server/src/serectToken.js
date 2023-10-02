import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  });
};

export default createSecretToken