import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

/**
 *  feature module
 *  shared module
 *  global module
 *
 *  dynamic module --> for D.M we need to register functionality...
 *
 */
