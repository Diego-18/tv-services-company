import { Entity } from 'typeorm';
import { Person } from './Person';

@Entity()
export class Client extends Person {

}