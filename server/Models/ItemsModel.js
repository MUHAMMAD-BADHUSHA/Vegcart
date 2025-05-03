const mongoose = require('mongoose')

const itemsScema = mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    image:{type: String,},
})
const ItemsModel = mongoose.model('items',itemsScema)

module.exports = ItemsModel