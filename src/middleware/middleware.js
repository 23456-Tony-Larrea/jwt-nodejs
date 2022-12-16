import { Users } from '../models/Users.js';

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  const tokenParts = token.split(' ');
  if (tokenParts[0] !== 'Bearer') {
    return res.status(401).send({ auth: false, message: 'Invalid token type. Expected "Bearer".' });
  }

  const tokenValue = tokenParts[1];

  Users.findOne({ where: { token: tokenValue } }).then(user => {
    if (!user) {
      return res.status(404).send({ auth: false, message: 'Token not found.' });
    }

    if (user.token_type !== 'Bearer') {
      return res.status(401).send({ auth: false, message: 'Token type does not match stored value.' });
    }

    req.userId = user.id;
    next();
  }).catch(err => {
    console.error(err);
    res.status(500).send({ auth: false, message: 'Server error.' });
  });
}

export const verifyRole = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  const tokenParts = token.split(' ');
  if (tokenParts[0] !== 'Bearer') {
    return res.status(401).send({ auth: false, message: 'Invalid token type. Expected "Bearer".' });
  }

  const tokenValue = tokenParts[1];

  Users.findOne({ where: { token: tokenValue } }).then(user => {
    if (!user) {
      return res.status(404).send({ auth: false, message: 'Token not found.' });
    }

    if (user.role !== 'administrador') {
      return res.status(401).send({ auth: false, message: 'Insufficient permissions.' });
    }

    req.userId = user.id;
    next();
  }).catch(err => {
    console.error(err);
    res.status(500).send({ auth: false, message: 'Server error.' });
  });
} 