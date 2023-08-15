import { Global, Module } from '@nestjs/common';
import { UserServices } from './services/user.Services';
import { UserController } from './controllers/user.controller';

@Global()
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserServices],
  exports: [UserServices],
})
export class UserModule {}
