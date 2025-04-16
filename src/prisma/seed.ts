import { PrismaClient } from '@prisma/client';

import { hashPassword } from '../core/utils/password';

const prisma = new PrismaClient();

async function main() {
  // Usuários de teste
  const usersData = [
    {
      name: 'Usuário Teste',
      email: 'user@teste.com',
      password: 'senha123',
    },
    {
      name: 'Admin',
      email: 'admin@teste.com',
      password: 'admin123',
    },
  ];

  // Cria ou atualiza usuários
  const users = [];
  for (const userData of usersData) {
    const passwordHash = await hashPassword(userData.password);
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        name: userData.name,
        email: userData.email,
        passwordHash,
      },
    });
    users.push(user);
  }

  // URLs encurtadas de teste
  const urlsData = [
    {
      originalUrl: 'https://www.google.com',
      shortCode: 'abc123',
      userId: users[0].id,
      clicks: 0,
    },
    {
      originalUrl: 'https://www.example.com',
      shortCode: 'anon01',
      userId: null,
      clicks: 0,
    },
    {
      originalUrl: 'https://www.github.com',
      shortCode: 'ghub01',
      userId: users[1].id,
      clicks: 5,
    },
  ];

  for (const urlData of urlsData) {
    await prisma.shortUrl.upsert({
      where: { shortCode: urlData.shortCode },
      update: {},
      create: urlData,
    });
  }

  console.log('Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 