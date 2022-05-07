import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Client } from "./Client"
import { Service } from "./Service"
import { Technical } from "./Technical"

@Entity()
export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    description: string;

    @ManyToOne(() => Technical, (technical) => technical.ticket, { eager: true, createForeignKeyConstraints: false })
    @JoinColumn({ name: "technical_fk" })
    technical: Technical

    @ManyToOne(() => Client, (client) => client.ticket, { eager: true, nullable: false, createForeignKeyConstraints: false })
    @JoinColumn({ name: "client_fk" })
    client: Client

    @ManyToOne(() => Service, (service) => service.ticket, { eager: true, nullable: false })
    @JoinColumn({ name: "service_fk" })
    service: Service

    @Column("int", { default: 1 })
    status: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}