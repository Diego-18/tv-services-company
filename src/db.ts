import { DataSource } from 'typeorm';



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "desarrollos2022",
    database: "services-tv",
    entities: [],
    synchronize: true,
})