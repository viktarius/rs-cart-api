import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carts } from '../database/entities/carts.entity';
import { DataSource } from 'typeorm';
import { CartInfo } from '../database/entities/cart-info.entity';
import { Users } from '../database/entities/user.entity';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Carts)
        private cartRepository: Repository<Carts>,
        private dataSource: DataSource
    ) {}

    findAll() {
        return this.cartRepository.find();
    }

    findOne(id: string) {
        return this.cartRepository.findOne({
            where: { id },
            relations: { cart_info: true, user: true }
        })
    }

    async create(body: any) {
        const { created_at, updated_at, count, status, user_id } = body;
        try {
            await this.dataSource.transaction(async manager => {
                const user = await manager.findOneBy(Users, { id: user_id });

                const cart = await manager.save(Carts, {
                    created_at,
                    updated_at,
                    status,
                    user
                })

                await manager.save(CartInfo, {
                    cart_id: cart.id,
                    count
                })
            })
            return true;
        } catch (e) {
            return false;
        }
    }

    deteleById(id: string) {
        return this.cartRepository.delete({ id })
    }
}
