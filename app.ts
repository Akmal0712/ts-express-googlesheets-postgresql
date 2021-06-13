require('dotenv').config()
import express, { Application } from 'express'
import bodyParser from 'body-parser'
import Router from './app/routes'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

Router.start(app)

const PORT = process.env.APP_PORT || 3000
app.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`)
})

