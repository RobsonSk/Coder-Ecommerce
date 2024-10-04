import { Injectable } from '@nestjs/common';
import { Order } from '@gstore/core';
import { PrismaProvider } from '../db/prisma.provider';

@Injectable()
export class OrderPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany();
    return orders as any;
  }
  async getById(id: number): Promise<Order[]> {
    const orders = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: { product: { select: { id: true, name: true } } },
        },
        shipping: true,
      },
    });
    return orders as any;
  }

  async save(order: Order): Promise<void> {
    await this.prisma.order.create({
      data: {
        date: order.date,
        status: order.status,
        totalValue: order.totalValue,
        payment: order.payment,
        shipping: { create: { ...order.shipping } },
        items: {
          create: order.items.map((item) => ({
            productId: item.product.id,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async delete(id: number): Promise<void> {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) return;
    await this.prisma.$transaction([
      this.prisma.orderItems.deleteMany({ where: { orderId: id } }),
      this.prisma.order.delete({ where: { id } }),
      this.prisma.shipping.delete({ where: { id: order.shippingId } }),
    ]);
  }
}
