import { Entity, OneToMany } from 'typeorm';
import { Person } from './Person';
import { Ticket } from './Ticket';

@Entity()
export class Client extends Person {
    @OneToMany(() => Ticket, (ticket) => ticket.client)
    ticket: Ticket[]
}