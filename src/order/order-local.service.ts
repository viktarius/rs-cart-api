import { Injectable } from '@nestjs/common';

let orders = [];

@Injectable()
export class OrderLocalService {
    public findAll(): Promise<any[]> {
        return Promise.resolve(orders)
    }

    public findOne(order_id: string): Promise<any> {
        return Promise.resolve(orders.find(({ id }) => id === order_id))
    }

    public create(body: any): Promise<boolean> {
        orders.push(body);
        return Promise.resolve(true)
    }

    public deleteById(order_id: string): Promise<boolean> {
        orders = orders.filter(({ id }) => id === order_id);
        return Promise.resolve(true)
    }
}
