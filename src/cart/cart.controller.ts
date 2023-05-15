import { Controller, Get, Req, HttpStatus, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carts } from '../database/entities/carts.entity';
import { Repository } from 'typeorm';

@Controller('api/v3/carts')
export class CartController {

    constructor(
        @InjectRepository(Carts)
        private cartRepository: Repository<Carts>
    ) {}

    @Get()
    async findUserCart(@Req() req: any) {
        // const cart = this.cartService.findOrCreateByUserId(getUserIdFromRequest(req));
        const carts = await this.cartRepository.find();
        return {
            statusCode: HttpStatus.OK,
            message: 'OK',
            body: { carts },
        }
    }

}
