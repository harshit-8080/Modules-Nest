import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductServices } from './services/product.Services';
import { UserModule } from 'src/User/user.module';
import { PhoneModule } from './Phone/phone.module';
import { CategoryController } from './controllers/category.controller';

@Module({
  imports: [UserModule, PhoneModule],
  controllers: [ProductController, CategoryController],
  providers: [ProductServices],
  exports: [ProductServices],
})
export class ProductModule {}
