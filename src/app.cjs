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

app.set('port', (PORT || 3001));

app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
})

const start = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(app.get('port'), function() {
            console.log('App is running, server is listening on port ', app.get('port'));
        });
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()



