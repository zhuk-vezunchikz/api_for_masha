const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const employeesRouter = require("./routing/employeesRouter.cjs");
const profileRouter = require("./routing/profileRouter.cjs");
const bodyParser = require('body-parser')

const PORT = config.get('port') || 3001
const MONGO_URL = config.get('mongoURL')

const app = express()

const jsonParser = bodyParser.json()

app.use('/api', jsonParser, employeesRouter)
app.use('/api', profileRouter)

const start = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`Server working on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()



