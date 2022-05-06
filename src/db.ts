import { DataSource } from 'typeorm';
import { Client } from './entities/Client';
import { Service } from './entities/Service';
import { Technical } from './entities/Technical';


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "desarrollos2022",
    database: "services-tv",
    entities: [Service, Technical, Client],
    synchronize: true,
})