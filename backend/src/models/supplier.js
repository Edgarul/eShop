const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = Schema({
  name: string,
  phoneNumber: string,
  email: string,
  address: { type: Schema.ObjectId, ref: 'Address' },
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Supplier', supplierSchema);
