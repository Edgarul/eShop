const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sweaterSchema = Schema({
  size: string,
  number: number,
  genre: string,
  product: { type: Schema.ObjectId, ref: 'Product' },
});

module.exports = mongoose.model('Sweater', sweaterSchema);
