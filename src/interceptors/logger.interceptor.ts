import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  Response,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as request from 'supertest';
import { tap } from 'rxjs';
import express from 'express';

export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    const ctx = context.switchToHttp();

    const request = ctx.getRequest<express.Request>();
    const response = ctx.getResponse<express.Response>();

    const startTime = Date.now();

    return next.handle().pipe(
      tap(() => {
        const end = Date.now();
        const resTime = end - startTime;
        console.log(request.method, request.path, response.statusCode, resTime);
      }),
    );
  }
}
