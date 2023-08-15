import { Controller, Get, Request, Response } from '@nestjs/common';
import express from 'express';
import { UserServices } from '../services/user.Services';

@Controller('/users')
export class UserController {
  constructor(private userService: UserServices) {}
  @Get('/profile')
  getUser(@Request() req: express.Request, @Response() res: express.Response) {
    return res.json({
      messgae: this.userService.getProfile(),
    });
  }
}
