const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const { z } = require('zod'); // Importamos o Zod aqui

// Atualizamos o Schema para incluir o nome
const createUserSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  email: z.string().email('O e-mail fornecido não é válido.'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
});

const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = createUserSchema.parse(req.body); // Pegamos o nome
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return res.status(409).json({ message: 'Este e-mail já está cadastrado.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name, // <-- E salvamos o nome
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      name: newUser.name, // <-- Retornamos o nome
    });

  } catch (error) {
    res.status(400).json({ message: 'Dados inválidos', details: error.errors });
  }
};