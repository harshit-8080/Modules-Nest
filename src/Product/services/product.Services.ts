import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductServices {
  getProduct() {
    return 'Product Information Services';
  }
}
