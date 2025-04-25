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
      tenantId: 'tenant-1',
    },
    {
      name: 'Admin',
      email: 'admin@teste.com',
      password: 'admin123',
      tenantId: 'tenant-2',
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
        tenantId: userData.tenantId,
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
      tenantId: users[0].tenantId,
    },
    {
      originalUrl: 'https://www.example.com',
      shortCode: 'anon01',
      userId: null,
      clicks: 0,
      tenantId: users[0].tenantId,
    },
    {
      originalUrl: 'https://www.github.com',
      shortCode: 'ghub01',
      userId: users[1].id,
      clicks: 5,
      tenantId: users[1].tenantId,
    },
  ];

  for (const urlData of urlsData) {
    await prisma.shortUrl.upsert({
      where: { shortCode: urlData.shortCode },
      update: {},
      create: {
        ...urlData,
        tenantId: urlData.tenantId,
      },
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