import { Controller, Get, Request, Response } from '@nestjs/common';
import express from 'express';

@Controller('/category')
export class CategoryController {
  @Get('/info')
  getCategory(
    @Request() req: express.Request,
    @Response() res: express.Response,
  ) {
    return res.json({
      messgae: 'Category retrieved',
    });
  }
}
