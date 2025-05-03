const mongoose = require ('mongoose')

const UserScheema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String,enum: ['user', 'admin'],default: 'user'}
})
const userModel = mongoose.model('users',UserScheema)

module.exports = userModel