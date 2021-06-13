import { Application } from 'express'
import { dbCreateConnection } from '../typeorm/dbConnection'
import bodyParser from 'body-parser'
import route from './api/v1'

export default class Router {
    public static start = async (app: Application) => {
        try {
            await dbCreateConnection();
            app.use(bodyParser.json())
            app.use(bodyParser.urlencoded({ extended: true }))
            app.use('/api', route)
        }
        catch (e) {
            console.log(e)
        }
    }
}