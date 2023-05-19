import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Orders } from './orders.entity';
import { Carts } from './carts.entity';

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    first_name: string;

    @Column({ type: 'text', nullable: true })
    second_name: string;

    @Column({ type: 'text' })
    email: string;

    @OneToMany(() => Orders, (order) => order.user)
    order: Orders[];

    @OneToMany(() => Carts, (carts) => carts.user)
    cart: Carts[];
}
