import { Request, Response } from 'express';
import config from 'config';
import { createSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send('invalid email or password');
  }

  const session = await createSession(user._id, req.get('user-agent') || '');

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get('accessTokenTtl') }
  );
  // console.log(accessToken, 1111111111111111111111111);

  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get('refreshTokenTtl') }
  );

  return res.send({ accessToken, refreshToken });
}
