const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  date: { type: Date, required: true }, // You can also use Date type
  status: { type: String, default: 'Processing' },
  items: [itemSchema],
  userId:{type:String,required:true},
  total:{type:String}
}, { timestamps: true });

const OrderModel = mongoose.model('Order', orderSchema);
module.exports = OrderModel;
