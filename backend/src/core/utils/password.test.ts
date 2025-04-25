import {
  hashPassword,
  verifyPassword,
} from './password';

describe('password utils', () => {
  const plain = 'senhaSegura123!';

  it('deve gerar um hash seguro e verificar corretamente', async () => {
    const hash = await hashPassword(plain);
    expect(hash).toMatch(/^\$2[aby]\$/); // bcrypt hash
    const isValid = await verifyPassword(plain, hash);
    expect(isValid).toBe(true);
  });

  it('deve retornar false para senha incorreta', async () => {
    const hash = await hashPassword(plain);
    const isValid = await verifyPassword('outraSenha', hash);
    expect(isValid).toBe(false);
  });
}); 