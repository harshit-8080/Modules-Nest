import { Controller, Get, Request, Response } from '@nestjs/common';
import express from 'express';
import { ProductServices } from '../services/product.Services';

@Controller('/cart')
export class ProductController {
  constructor(private productServices: ProductServices) {}

  @Get('/info')
  getProduct(
    @Request() req: express.Request,
    @Response() res: express.Response,
  ) {
    return res.json({
      messgae: this.productServices.getProduct(),
    });
  }
}
