const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = Schema({
  name: string,
  country: { type: Schema.ObjectId, ref: 'Country' },
});

module.exports = mongoose.model('State', stateSchema);
