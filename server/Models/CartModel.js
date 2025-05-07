const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
         name:String,
         price:String,
         category:String,
         image:String,
})

const CartModel = mongoose.model('cart',cartSchema)

module.exports = CartModel