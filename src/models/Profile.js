const {Schema, model} = require('mongoose')

const ProfileSchema = new Schema({
    avatar: { type: String},
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String},
    age: { type: Number},
})

module.exports = model('Profile', ProfileSchema)