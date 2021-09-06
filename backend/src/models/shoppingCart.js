const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingCartSchema = Schema({
  items: [
    {
      type: Schema.ObjectId,
      ref: 'ShoppingCartItem'
    },
  ],
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);
