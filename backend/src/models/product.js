const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
  stock: number,
  slug: string,
  name: string,
  description:string,
  price: number,
  photoUrl: string,
  supplier: { type: Schema.ObjectId, ref: 'Supplier' },
  prodSubCategory: { type: Schema.ObjectId, ref: 'ProdSubCategory' },
  productType: { type: Schema.ObjectId, ref: 'ProductType' },
  createdBy: { type: Schema.ObjectId, ref: 'Employee' },
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
