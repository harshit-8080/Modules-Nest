import { NestMiddleware } from '@nestjs/common';
import express from 'express';
export function auth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const auth = req.headers['stoken'];
  console.log(auth);

  if (auth == 'harshit') {
    next();
  } else {
    return res.json({
      message: 'invalid token',
    });
  }
}

export class AuthClassMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {}
}
