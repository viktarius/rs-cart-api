import { Controller, Get, Req, HttpStatus } from '@nestjs/common';

@Controller('api/v3/carts')
export class CartController {

  @Get()
  findUserCart(@Req() req: any) {
    // const cart = this.cartService.findOrCreateByUserId(getUserIdFromRequest(req));

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: { carts: [{ id: 'id-1' }] },
    }
  }

}
