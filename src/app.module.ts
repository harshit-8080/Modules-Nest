import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { ProductModule } from './Product/product.module';
import { RouterModule } from '@nestjs/core';
import { PhoneModule } from './Product/Phone/phone.module';
import { AppController } from './app.controller';

@Module({
  imports: [
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
export class AppModule {}
