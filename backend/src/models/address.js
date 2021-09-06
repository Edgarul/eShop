const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = Schema({
  line1: string,
  line2: string,
  street: string,
  city: string,
  postalCode: string,
  state: { type: Schema.ObjectId, ref: 'State' },
});

module.exports = mongoose.model('Address', addressSchema);
