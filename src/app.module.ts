import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { ProductModule } from './Product/product.module';
import { RouterModule } from '@nestjs/core';
import { PhoneModule } from './Product/Phone/phone.module';

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
})
export class AppModule {}
