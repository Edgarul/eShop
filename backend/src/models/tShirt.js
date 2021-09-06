const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tShirtSchema = Schema({
  sleeves: string,
  cut: string,
  collar: string,
  style: string,
  size: string,
  number: number,
  genre: string,
  product: { type: Schema.ObjectId, ref: 'Product' },
});

module.exports = mongoose.model('TShirt', tShirtSchema);
