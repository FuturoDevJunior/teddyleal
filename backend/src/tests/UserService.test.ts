import { IUserRepository } from '../core/repositories/UserRepository';
import { UserService } from '../core/services/UserService';

jest.mock('../core/utils/password', () => ({
  hashPassword: jest.fn(async (pw: string) => `hashed-${pw}`),
  verifyPassword: jest.fn(async (pw: string, hash: string) => hash === `hashed-${pw}`),
}));

describe('UserService', () => {
  let userRepository: jest.Mocked<IUserRepository>;
  let service: UserService;

  beforeEach(() => {
    userRepository = {
      create: jest.fn(async (data) => ({ id: '1', ...data, createdAt: new Date(), updatedAt: new Date(), deletedAt: null })),
      findByEmail: jest.fn(async (email) => email === 'user@email.com' ? { id: '1', name: 'User', email, passwordHash: 'hashed-password', createdAt: new Date(), updatedAt: new Date(), deletedAt: null, tenantId: 'tenant-1' } : null),
      findById: jest.fn(),
    };
    service = new UserService(userRepository);
  });

  it('deve registrar um novo usuário com e-mail sanitizado', async () => {
    const user = await service.register({ name: 'User', email: '  USER@email.com ', password: 'password', tenantId: 'tenant-1' });
    expect(userRepository.create).toHaveBeenCalledWith(expect.objectContaining({
      email: 'user@email.com',
      tenantId: 'tenant-1',
    }));
    expect(user.name).toBe('User');
    expect(user.email).toBe('user@email.com');
  });

  it('deve autenticar usuário com senha correta', async () => {
    const user = await service.authenticate('user@email.com', 'password');
    expect(user).not.toBeNull();
    expect(user?.email).toBe('user@email.com');
  });

  it('deve retornar null para autenticação com senha incorreta', async () => {
    const user = await service.authenticate('user@email.com', 'wrong');
    expect(user).toBeNull();
  });

  it('deve buscar usuário por e-mail sanitizado', async () => {
    await service.findByEmail('  USER@email.com ');
    expect(userRepository.findByEmail).toHaveBeenCalledWith('user@email.com');
  });
}); 