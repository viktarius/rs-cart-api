import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

let carts = [{
    id: 'ac80028e-2a17-4396-962d-2d3fae2e35e8',
    created_at: '05-19-2023',
    updated_at: '05-19-2023',
    status: 'open',
    order: [{
        product_id: '1',
        count: '2'
    }, {
        product_id: '2',
        count: '3'
    }],
    user_id: '23c38769-60d4-4a32-b4e0-4e66f6d60297'
}, {
    id: 'a628049c-2bcb-4f28-81aa-b0a92e85e8e3',
    created_at: '05-19-2023',
    updated_at: '05-19-2023',
    status: 'open',
    order: [{
        product_id: '3',
        count: '1'
    }, {
        product_id: '4',
        count: '1'
    }],
    user_id: '4b44096d-0fef-422a-bdae-0cee1c699872'
}, {
    id: '815292f8-b836-4ee3-9af6-ebb31a66ae9b',
    created_at: '05-19-2023',
    updated_at: '05-19-2023',
    status: 'open',
    order: [{
        product_id: '2',
        count: '2'
    }, {
        product_id: '5',
        count: '3'
    }],
    user_id: 'dd65b313-91dc-450e-9095-56d234fa3d32'
}]

@Injectable()
export class CartLocalService {

    public findAll() {
        return Promise.resolve(carts);
    }

    public findOne(cart_id: string) {
        return Promise.resolve(carts.find(({ id }) => cart_id === id));
    }

    public create(body: any) {
        const { order, status, user_id } = body;

        carts.push({
            id: uuidv4(),
            created_at: this.getDate(),
            updated_at: this.getDate(),
            status,
            user_id,
            order,
        })

        return Promise.resolve(true)

    }

    public deleteById(cart_id: string) {
        carts = carts.filter(({ id }) => id !== cart_id);
        return Promise.resolve(true)
    }

    private getDate(): string {
        const date = new Date();
        return `${ date.getDate() }-${ date.getMonth() + 1 }-${ date.getFullYear() }`
    }
}
