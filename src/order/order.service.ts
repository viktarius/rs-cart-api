import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Orders } from '../database/entities/orders.entity';
import { Carts } from '../database/entities/carts.entity';
import { ECartStatus } from '../cart/models/cart.model';
import { Users } from '../database/entities/user.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Orders)
        private ordersRepository: Repository<Orders>,
        private dataSource: DataSource
    ) {}

    findAll() {
        return this.ordersRepository.find({
            relations: {
                cart: true
            }
        })
    }

    findById(id: string) {
        return this.ordersRepository.findOne(
            {
                where: { id },
                relations: { cart: true, user: true }
            },
        )
    }

    async create(body) {
        const { comments = '', status, total, payment = {}, delivery = {}, cart_id, user_id } = body;
        try {
            const cart = await this.dataSource.manager.findOneBy(Carts, { id: cart_id });
            const user = await this.dataSource.manager.findOneBy(Users, { id: user_id });
            await this.dataSource.manager.save(Orders, {
                cart,
                user,
                comments,
                status,
                total,
                payment: payment,
                delivery: delivery,
            })
            return true;
        } catch (e) {
            return false;
        }
    }

    async delete(id: string) {
        try {
            const order = await this.findById(id);
            await this.dataSource.manager.save(Orders, { ...order, status: ECartStatus.ORDERED })
            return true;
        } catch (e) {
            return false;
        }
    }
}
