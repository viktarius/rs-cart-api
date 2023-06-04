import { Module } from '@nestjs/common';

import { CartController } from './cart.controller';
import { CartLocalService } from './cart-local.service';
// import { CartService } from './cart.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Carts } from '../database/entities/carts.entity';
// import { CartInfo } from '../database/entities/cart-info.entity';
// import { Users } from '../database/entities/user.entity';

@Module({
    // imports: [TypeOrmModule.forFeature([Carts, CartInfo, Users])],
    controllers: [CartController],
    providers: [
        // CartService,
        CartLocalService,
    ]
})
export class CartModule {
}
