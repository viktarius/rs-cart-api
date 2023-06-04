import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderLocalService } from './order-local.service';
// import { OrderService } from './order.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Orders } from '../database/entities/orders.entity';
// import { Users } from '../database/entities/user.entity';

@Module({
    // imports: [TypeOrmModule.forFeature([Orders, Users])],
    controllers: [OrderController],
    providers: [
        // OrderService,
        OrderLocalService
    ]
})
export class OrderModule {
}
