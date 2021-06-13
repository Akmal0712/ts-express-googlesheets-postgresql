import express, { Application } from 'express'
const app: Application = express()

import bodyParser from 'body-parser'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


import Router from './app/routes'
Router.start(app)

require('dotenv').config()
const PORT = process.env.APP_PORT || 3000

app.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`)
})

