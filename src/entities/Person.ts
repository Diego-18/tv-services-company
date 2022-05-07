import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export abstract class Person extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 50, nullable: false })
    firstName: string;

    @Column("varchar", { length: 50, nullable: false })
    lastName: string;

    @Column()
    email: string;

    @Column("varchar", { length: 15 })
    phone: string;

    @Column("int", { default: 1, nullable: false })
    status: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}