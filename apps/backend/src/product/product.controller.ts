import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductRepo } from './product.repo';
import { Product } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly repo: ProductRepo) {}

  @Post()
  saveProduct(@Body() product: Product): Promise<void> {
    return this.repo.save(product);
  }

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.repo.getAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Promise<Product | null> {
    return this.repo.getById(+id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
