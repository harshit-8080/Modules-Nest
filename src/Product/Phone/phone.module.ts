import { Module } from '@nestjs/common';
import { PhoneController } from './controllers/phone.controller';

@Module({
  imports: [],
  controllers: [PhoneController],
  providers: [],
  exports: [],
})
export class PhoneModule {}
