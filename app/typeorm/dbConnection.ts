import { Connection, createConnection } from 'typeorm'
import config from '../../ormconfig'

export const dbCreateConnection = async (): Promise<Connection | null> => {
    try {
        const conn = await createConnection(config)
        console.log(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`)
    } catch (error) {
        console.log(error)
    }
    return null
}