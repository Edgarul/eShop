const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = Schema({
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  creationDate: { type: Date, default: Date.now },
  user: { type: Schema.ObjectId, ref:'User' },
  wishList: [
    {
      type: Schema.ObjectId,
      ref: 'Product'
    },
  ],
  shoppingCart: {type: Schema.ObjectId, ref:'ShoppingCart' }
});

module.exports = mongoose.model('Customer', customerSchema);
