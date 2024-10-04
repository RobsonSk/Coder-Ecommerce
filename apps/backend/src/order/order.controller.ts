import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderPrisma } from './order.repo';
import { Order } from '@gstore/core';

@Controller('order')
export class OrderController {
  constructor(private readonly repo: OrderPrisma) {}

  @Post()
  async save(@Body() order: Order) {
    return this.repo.save(order);
  }

  @Get()
  async getAll() {
    return this.repo.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.repo.getById(+id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.repo.delete(+id);
  }
}
