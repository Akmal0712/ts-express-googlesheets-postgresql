require('dotenv').config()
import { ConnectionOptions } from 'typeorm'

const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: false,
    entities: ['app/typeorm/entities/*.ts'],
    migrations: ['app/typeorm/migrations/*.ts'],
    cli: {
        entitiesDir: 'app/typeorm/entities',
        migrationsDir: 'app/typeorm/migrations',
    }
}

export = config