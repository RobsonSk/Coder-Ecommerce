import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DbModule } from 'src/db/db.module';
import { ProductRepo } from './product.repo';

@Module({
  imports: [DbModule],
  controllers: [ProductController],
  providers: [ProductRepo],
})
export class ProductModule {}
