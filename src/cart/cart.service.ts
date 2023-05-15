import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carts } from '../database/entities/carts.entity';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Carts)
        private cartRepository: Repository<Carts>
    ) {}

    findAll() {
        return this.cartRepository.find();
    }
}
