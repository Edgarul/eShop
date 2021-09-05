var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mercanciaSchema = Schema({
  idprenda: {type: Schema.ObjectId, ref: 'Tipo'},

});

module.exports = mongoose.model('Mercancia', mercanciaSchema);
