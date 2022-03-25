const {Schema, model} = require('mongoose')

const EmployeeSchema = new Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String},
    age: { type: Number},
})

module.exports = model('Employee', EmployeeSchema)