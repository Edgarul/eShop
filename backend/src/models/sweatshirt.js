const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sweatShirtSchema = Schema({
  style: string,
  size: string,
  number: number,
  genre: string,
  product: { type: Schema.ObjectId, ref: 'Product' },
});

module.exports = mongoose.model('SweatShirt', sweatShirtSchema);
