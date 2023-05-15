import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';
import { AppController } from './app.controller';
import { CartModule } from './cart/cart.module';
import { Carts } from './database/entities/carts.entity';
import { CartInfo } from './database/entities/cart-info.entity';
import SnakeNamingStrategy from 'typeorm-naming-strategy';
import { DataSource } from 'typeorm';
import { Orders } from './database/entities/orders.entity';
import { OrderModule } from './order/order.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            // host: process.env.DATABASE_HOST,
            // port: +process.env.DATABASE_PORT,
            // username: process.env.DATABASE_USERNAME,
            // password: process.env.DATABASE_PASSWORD,
            // database: process.env.DATABASE_NAME,
            host: 'rds-could-x-database.c2onnuhtmxs0.us-east-1.rds.amazonaws.com',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'cloud_x',
            entities: [Carts, CartInfo, Orders],
            logging: true,
            namingStrategy: new SnakeNamingStrategy(),
            synchronize: true,
            autoLoadEntities: true,
        }),
        CartModule,
        OrderModule
    ],
    controllers: [AppController],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
