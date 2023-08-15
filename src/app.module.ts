import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { ProductModule } from './Product/product.module';
import { RouterModule } from '@nestjs/core';
import { PhoneModule } from './Product/Phone/phone.module';
import { AppController } from './app.controller';
import { PlayerModule } from './Player/player.module';
import { testAuth1, testAuth2, testAuth3 } from './middlewares/test-middleware';

@Module({
  imports: [
    PlayerModule,
    UserModule,
    ProductModule,
    RouterModule.register([
      {
        path: 'product',
        module: ProductModule,
        children: [{ path: 'phone', module: PhoneModule }],
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(testAuth1, testAuth2, testAuth3).forRoutes('*');
  }
}
