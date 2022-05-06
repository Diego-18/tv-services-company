import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Technical extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 50 })
    firstName: string;

    @Column("varchar", { length: 50 })
    lastName: string;

    @Column()
    email: string;

    @Column("varchar", { length: 15 })
    phone: string;

    @Column("int", { default: 1 })
    status: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}