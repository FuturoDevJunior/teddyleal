import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido' }),
  password: z.string().min(6, { message: 'Senha obrigatória' }),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(10, { message: 'Refresh token obrigatório' }),
});

export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>; 