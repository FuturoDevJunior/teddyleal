import validator from 'validator';

import { User } from '@prisma/client';

import { IUserRepository } from '../repositories/UserRepository';
import {
  hashPassword,
  verifyPassword,
} from '../utils/password';

export interface IUserService {
  register(data: { name: string; email: string; password: string }): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  authenticate(email: string, password: string): Promise<User | null>;
}

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async register(data: { name: string; email: string; password: string }): Promise<User> {
    const sanitizedEmail = validator.normalizeEmail(validator.trim(data.email)) || '';
    const passwordHash = await hashPassword(data.password);
    return this.userRepository.create({
      name: data.name,
      email: sanitizedEmail,
      passwordHash,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const sanitizedEmail = validator.normalizeEmail(validator.trim(email)) || '';
    return this.userRepository.findByEmail(sanitizedEmail);
  }

  async authenticate(email: string, password: string): Promise<User | null> {
    const sanitizedEmail = validator.normalizeEmail(validator.trim(email)) || '';
    const user = await this.userRepository.findByEmail(sanitizedEmail);
    if (!user) return null;
    const valid = await verifyPassword(password, user.passwordHash);
    return valid ? user : null;
  }
} 