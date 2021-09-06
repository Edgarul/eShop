const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = Schema({
  date: {type: Date, default: Date.now},
  pieces: number,
  price: number,
  order: { type: Schema.ObjectId, ref: 'Order'}
});

module.exports = mongoose.model('Ticket', ticketSchema);
