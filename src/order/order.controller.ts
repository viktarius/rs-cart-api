import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('api/v3/orders')
export class OrderController {
    @Inject(OrderService)
    private readonly orderService: OrderService

    @Get()
    async findAllOrders() {
        const orders = await this.orderService.findAll();
        return {
            statusCode: HttpStatus.OK,
            body: { orders },
        }
    }

    @Get(':id')
    async findOneOrder(@Param() params: any) {
        const order = await this.orderService.findById(params.id);
        return {
            statusCode: HttpStatus.OK,
            body: { order },
        }
    }

    @Post()
    async createOrder(@Body() body: any) {
        const result = await this.orderService.create(body);
        return {
            statusCode: HttpStatus.OK,
            body: { result }
        }
    }

    @Delete(':id')
    async deleteOrderById(@Param() params: any) {
        const result = await this.orderService.delete(params.id);
        return {
            statusCode: result ? HttpStatus.OK: HttpStatus.INTERNAL_SERVER_ERROR,
            result
        }
    }
}
