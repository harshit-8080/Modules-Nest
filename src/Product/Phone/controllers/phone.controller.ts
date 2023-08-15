import { Controller, Get } from '@nestjs/common';

@Controller('/apple')
export class PhoneController {
  @Get('/iphone')
  getIphone() {
    return {
      message: 'iphone is available',
    };
  }
}
