import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable, ManyToOne, OneToMany } from "typeorm"
import { CartInfo } from './cart-info.entity';
import { ECartStatus } from '../../cart/models/cart.model';
import { Orders } from './orders.entity';

@Entity()
export class Carts {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text', nullable: false, generated: 'uuid' })
    user_id: string;

    @Column({ type: 'date', nullable: false })
    created_at: string;

    @Column({ type: 'date', nullable: false })
    updated_at: number;

    @Column({ type: 'enum', enum: ECartStatus })
    status: ECartStatus;

    @OneToOne(() => CartInfo, (cartInfo) => cartInfo.cart_id, { onDelete: "CASCADE" })
    @JoinTable()
    cart_info: CartInfo

    @OneToMany(() => Orders, (order) => order.cart)
    order: Orders[]
}
