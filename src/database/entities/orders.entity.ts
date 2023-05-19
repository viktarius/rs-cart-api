import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Carts } from './carts.entity';
import { ECartStatus } from '../../cart/models/cart.model';
import { Users } from './user.entity';

@Entity()
export class Orders {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'json' })
    payment: JSON;

    @Column({ type: 'json' })
    delivery: JSON;

    @Column({ type: 'text' })
    comments: JSON;

    @Column({ type: 'enum', enum: ECartStatus })
    status: ECartStatus;

    @Column({type: 'integer', nullable: false})
    total: number;

    @ManyToOne(() => Users, (user) => user)
    user: Users;

    @ManyToOne(() => Carts, (cart) => cart.order)
    cart: Carts;
}
