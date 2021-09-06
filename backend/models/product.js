var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = Schema({
  title:string,
  price: number,
  image: string,
  description:string,
  stock: number,
  Category: {type: Schema.ObjectId, ref: 'Categoria'},
  Proveedor: {type: Schema.ObjectId, ref: 'Proveedor'},

});

module.exports = mongoose.model('Product', productSchema);
