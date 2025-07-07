// backend/server.js

const express = require('express');
const cors = require('cors');
require('dotenv/config');

// Bloco temporário para criar o usuário de teste
// =================================================================
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function createSampleUser() {
  const userExists = await prisma.user.findUnique({ where: { email: 'admin@admin.com' } });
  
  if (!userExists) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.user.create({
      data: {
        email: 'admin@admin.com',
        password: hashedPassword,
      },
    });
    console.log('✅ Usuário de teste criado com sucesso!');
  } else {
    console.log('ℹ️ Usuário de teste já existe no banco.');
  }
}

// Executa a função para criar o usuário
createSampleUser();
// =================================================================
// Fim do bloco temporário


// Código principal do servidor
const authRoutes = require('./src/routes/auth.routes');
const vehicleRoutes = require('./src/routes/vehicle.routes');
const userRoutes = require('./src/routes/user.routes'); // <-- 1. IMPORTAMOS A NOVA ROTA AQUI

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes); // <-- 2. USAMOS A NOVA ROTA AQUI
app.use('/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));