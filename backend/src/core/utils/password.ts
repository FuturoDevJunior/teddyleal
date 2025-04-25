import bcrypt from 'bcryptjs';

const DEFAULT_SALT_ROUNDS = 10;

function getSaltRounds(): number {
  const envSalt = process.env.BCRYPT_SALT_ROUNDS;
  const parsed = envSalt ? parseInt(envSalt, 10) : DEFAULT_SALT_ROUNDS;
  return Number.isNaN(parsed) ? DEFAULT_SALT_ROUNDS : parsed;
}

/**
 * Gera um hash seguro para a senha.
 * @param password Senha em texto puro
 * @returns Hash seguro
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = getSaltRounds();
  return bcrypt.hash(password, saltRounds);
}

/**
 * Compara uma senha em texto puro com um hash.
 * @param password Senha em texto puro
 * @param hash Hash armazenado
 * @returns true se coincidir, false caso contrário
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
} 