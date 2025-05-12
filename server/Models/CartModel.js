const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    image: String,
    quantity: { type: Number, default: 1 }
})

const CartModel = mongoose.model('cart',cartSchema)

module.exports = CartModel