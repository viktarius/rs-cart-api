import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { CartModule } from './cart/cart.module';

@Module({
    imports: [CartModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {
}
