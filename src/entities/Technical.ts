import { Column, Entity, OneToMany } from 'typeorm';
import { Person } from './Person';
import { Ticket } from './Ticket';

@Entity()
export class Technical extends Person {
    @Column("int", { width: 3 })
    yearsService: number;

    @Column()
    outsourcing: boolean;

    @OneToMany(() => Ticket, (ticket) => ticket.client)
    ticket: Ticket[]
}