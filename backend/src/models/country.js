const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = Schema({
  name: string,
});

module.exports = mongoose.model('Country', countrySchema);
