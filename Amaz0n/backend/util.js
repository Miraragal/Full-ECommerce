import jwt from 'jsonwebtoken';
import { get } from 'mongoose';
import config from './config';

const getToken = (user) => {
    return jwt.sign(    // 3parameters: payload ,secret key to encript the payload and the expire time
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      config.JWT_SECRET,
      {
        expiresIn: '48h',
      }
    );
  };


export default getToken;