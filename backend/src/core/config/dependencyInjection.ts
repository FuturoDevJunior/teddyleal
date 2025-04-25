// Container manual de injeção de dependências
// Segue princípios SOLID e Clean Code para facilitar testes e manutenção

import { PrismaClient } from '@prisma/client';

import { AuthController } from '../controllers/AuthController';
import { ShortUrlController } from '../controllers/ShortUrlController';
import { ShortUrlRepository } from '../repositories/ShortUrlRepository';
import { UserRepository } from '../repositories/UserRepository';
import { ShortUrlService } from '../services/ShortUrlService';
import { UserService } from '../services/UserService';

// Exemplo de importação de repository e service
// import { UserRepository } from '../repositories/UserRepository';
// import { UserService } from '../services/UserService';

// Instância única do PrismaClient
const prisma = new PrismaClient();

// Instâncias de repositórios
const userRepository = new UserRepository(prisma);
const shortUrlRepository = new ShortUrlRepository(prisma);

// Instâncias de serviços
const userService = new UserService(userRepository);
const shortUrlService = new ShortUrlService(shortUrlRepository);

// Instância do ShortUrlController
const shortUrlController = new ShortUrlController(shortUrlService);

// Instância do AuthController
const authController = new AuthController(userService);

// Container de dependências
export const container = {
  prisma,
  userRepository,
  shortUrlRepository,
  userService,
  shortUrlService,
  shortUrlController,
  authController,
};

/**
 * Para adicionar novos serviços ou repositórios:
 * 1. Importe o módulo
 * 2. Instancie passando as dependências necessárias
 * 3. Exporte no objeto container
 */ 