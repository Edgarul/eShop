var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = Schema({
  title:string,
  price: number,
  image: string,
  description:string,
  stock: number,
  idMercancia: {type: Schema.ObjectId, ref: 'Mercancia'},
  idCategory: {type: Schema.ObjectId, ref: 'Categoria'},
  idProveedor: {type: Schema.ObjectId, ref: 'Proveedor'},

});

module.exports = mongoose.model('Product', productSchema);
