const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodCategorySchema = Schema({
  title: string,
  subcategory: string,
  description: string,
  slug: string,
});

module.exports = mongoose.model('ProdCategory', prodCategorySchema);
