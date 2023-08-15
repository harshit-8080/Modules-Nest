import express from 'express';
export function testAuth1(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  console.log('test1 Authentication executed');
  next();
}
export function testAuth2(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  console.log('test2 Authentication executed');
  next();
}
export function testAuth3(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  console.log('test3 Authentication executed');
  next();
}
