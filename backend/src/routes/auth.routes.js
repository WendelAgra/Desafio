// src/routes/auth.routes.js
const { Router } = require('express');
const { login } = require('../controllers/auth.controller');

const router = Router();
router.post('/login', login);
module.exports = router;

// src/middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }
  const token = authHeader.split(' ')[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};