import bodyParser from 'body-parser'
import { Application } from 'express'
import v0 from './api/v0'
import { dbCreateConnection } from '../typeorm/dbConnection'

export default class Router {
    public static async start(app: Application) {
        try {
            await dbCreateConnection();
            app.use(bodyParser.json())
            app.use(bodyParser.urlencoded({ extended: true }))
            app.use('/api', v0)
        }
        catch (e) {
            console.log(e)
        }
    }
}

// const router = async (app: Application) => {
//     try {
//         await dbCreateConnection();
//         app.use(bodyParser.json())
//         app.use(bodyParser.urlencoded({ extended: true }))
//         app.use('/api', v0)
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
//
