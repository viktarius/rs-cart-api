import { Controller, Get, Req, HttpStatus, Inject, Post, Param, Delete, Body } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('api/v3/carts')
export class CartController {
    @Inject(CartService)
    private readonly cartService: CartService;

    @Get()
    async findAllCarts() {
        const carts = await this.cartService.findAll();
        return {
            statusCode: HttpStatus.OK,
            body: { carts },
        }
    }

    @Get(':id')
    async findOneCart(@Param() params: any) {
        const cart = await this.cartService.findOne(params.id);
        return {
            statusCode: HttpStatus.OK,
            body: { cart },
        }
    }

    @Post()
    async createCart(@Body() body: any) {
        const result = await this.cartService.create(body);
        return {
            statusCode: HttpStatus.OK,
            body: {
                result
            }
        }
    }

    @Delete(':id')
    async deleteCartById(@Param() params: any) {
        try {
            await this.cartService.deteleById(params.id);
            return {
                statusCode: HttpStatus.OK,
                message: `cart with id: ${ params.id } deleted`
            }
        } catch (e) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: e.message
            }
        }
    }
}
