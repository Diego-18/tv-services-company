import { Column, Entity } from 'typeorm';
import { Person } from './Person';

@Entity()
export class Technical extends Person {
    @Column("int", { width: 3 })
    yearsService: number;

    @Column()
    outsourcing: boolean;
}