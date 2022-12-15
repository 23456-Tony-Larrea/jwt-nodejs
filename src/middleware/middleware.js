import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    console.log(token);
    if (!token) {
      return res.status(401).send('Access Denied');
    }
    if (!/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(token)) {
      return res.status(400).send('Invalid Token');
    }
    try {
      const decoded = jwt.decode(token, 'secretkey');
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).send('Invalid Token');
    }
}