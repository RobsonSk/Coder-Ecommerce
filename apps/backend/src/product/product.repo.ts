import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProductRepo {
  constructor(readonly prisma: PrismaProvider) {}

  async save(product: Product): Promise<void> {
    await this.prisma.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    });
  }
  async getAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products as any;
  }

  async getById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    return product as any;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
