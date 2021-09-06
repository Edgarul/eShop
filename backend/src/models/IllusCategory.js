const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const illusCategorySchema = Schema({
  title: string,
  subcategory: string,
  description: string,
  slug: string,
});

module.exports = mongoose.model('IllusCategory', illusCategorySchema);
