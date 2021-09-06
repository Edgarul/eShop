const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema({
  customer: {type: Schema.ObjectId, ref:'Customer'},
  products: [
    {
      type: Schema.ObjectId,
      ref: 'Product'
    },
  ],
  creationDate: { type: Date, default: Date.now },
  shoppingCart:{type: Schema.ObjectId, ref: 'shoppingCart'},

});

module.exports = mongoose.model('Order', orderSchema);
