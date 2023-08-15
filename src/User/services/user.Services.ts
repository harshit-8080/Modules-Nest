import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServices {
  getProfile() {
    return 'User Profile from Services';
  }
}
