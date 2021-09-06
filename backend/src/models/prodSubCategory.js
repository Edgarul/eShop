const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodSubCategorySchema = Schema({
  name: string,
  description: string,
  slug: string,
  prodCategory: { type: Schema.ObjectId, ref: 'ProdCategory' },
});

module.exports = mongoose.model('ProdSubCategory', prodSubCategorySchema);
