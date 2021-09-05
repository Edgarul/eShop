var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriaSchema = Schema({
  title: string,
  subcategoria: string,
  descripcion: string,


});

module.exports = mongoose.model('Categoria', categoriaSchema);
