import {
  Request,
  Response,
} from 'express';
import jwt, {
  Secret,
  SignOptions,
} from 'jsonwebtoken';

import { IUserService } from '../services/UserService';
import {
  loginSchema,
  refreshTokenSchema,
} from '../validators/auth.validator';

const JWT_SECRET = (process.env.JWT_SECRET || 'changeme') as Secret;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '15m';
const REFRESH_SECRET = (process.env.REFRESH_SECRET || 'refreshSecret') as Secret;
const REFRESH_EXPIRES_IN = process.env.REFRESH_EXPIRES_IN || '7d';

export class AuthController {
  constructor(private readonly userService: IUserService) {}

  async login(req: Request, res: Response) {
    const parse = loginSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(422).json({ success: false, error: parse.error.flatten(), data: null });
    }
    const { email, password } = parse.data;
    const user = await this.userService.authenticate(email, password);
    if (!user) {
      return res.status(401).json({ success: false, error: 'Credenciais inválidas', data: null });
    }
    const token = jwt.sign(
      { id: user.id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN } as SignOptions
    );
    const refreshToken = jwt.sign(
      { id: user.id },
      REFRESH_SECRET,
      { expiresIn: REFRESH_EXPIRES_IN } as SignOptions
    );
    return res.json({ success: true, data: { token, refreshToken, user: { id: user.id, name: user.name, email: user.email } }, error: null });
  }

  async refresh(req: Request, res: Response) {
    const parse = refreshTokenSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(422).json({ success: false, error: parse.error.flatten(), data: null });
    }
    const { refreshToken } = parse.data;
    try {
      const payload = jwt.verify(refreshToken, REFRESH_SECRET) as { id: string };
      const token = jwt.sign(
        { id: payload.id },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN } as SignOptions
      );
      return res.json({ success: true, data: { token }, error: null });
    } catch {
      return res.status(401).json({ success: false, error: 'Refresh token inválido', data: null });
    }
  }
} 