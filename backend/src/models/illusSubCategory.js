const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const illusSubCategorySchema = Schema({
  name: string,
  description: string,
  slug: string,
  illusCategory: { type: Schema.ObjectId, ref: 'IllusCategory' },
});

module.exports = mongoose.model('IllusSubCategory', illusSubCategorySchema);
