const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productTypeSchema = Schema({
  name: string,
});

module.exports = mongoose.model('ProductType', productTypeSchema);
