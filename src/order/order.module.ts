import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Orders } from '../database/entities/orders.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Orders])],
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule {
}
