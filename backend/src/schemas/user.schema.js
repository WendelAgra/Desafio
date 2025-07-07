// src/schemas/user.schema.js
const { z } = require('zod');

const createUserSchema = z.object({
  email: z.string().email('O e-mail fornecido não é válido.'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
});

module.exports = { createUserSchema };