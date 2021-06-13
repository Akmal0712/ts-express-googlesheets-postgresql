require('dotenv').config()
import { ConnectionOptions } from 'typeorm'

const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: ['app/typeorm/entities/*.ts'],
    migrations: ['app/typeorm/migrations/*.migration.ts'],
    subscribers: ['app/typeorm/subscriber/*.ts'],
    cli: {
        entitiesDir: 'app/typeorm/entities',
        migrationsDir: 'app/typeorm/migrations',
        subscribersDir: 'app/typeorm/subscriber',
    }
}

export = config