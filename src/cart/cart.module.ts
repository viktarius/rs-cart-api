import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart.controller';
import { Carts } from '../database/entities/carts.entity';
import { CartInfo } from '../database/entities/cart-info.entity';
import { CartService } from './cart.service';

@Module({
    imports: [TypeOrmModule.forFeature([Carts, CartInfo])],
    controllers: [CartController],
    providers: [CartService]
})
export class CartModule {
}
