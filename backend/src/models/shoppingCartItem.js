const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingCartItemSchema = Schema({
  quantity: number,
  product: { type: Schema.ObjectId, ref: 'Product' },
});

module.exports = mongoose.model('ShoppingCartItem', shoppingCartItemSchema);
