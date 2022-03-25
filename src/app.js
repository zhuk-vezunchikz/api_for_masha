const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const employeesRouter = require("./routing/employeesRouter.js");
const profileRouter = require("./routing/profileRouter.js");
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001
const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://zhuk-vezunchik:vezunchik05011996@cluster0.wobx9.mongodb.net/databaseForMasha?retryWrites=true&w=majority"

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



