import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from 'typeorm';
import { Carts } from './carts.entity';
import { ECartStatus } from '../../cart/models/cart.model';

@Entity()
export class Orders {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text', nullable: false, generated: 'uuid' })
    user_id: string;

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

    @ManyToOne(() => Carts, (cart) => cart.order)
    cart: Carts;
}
