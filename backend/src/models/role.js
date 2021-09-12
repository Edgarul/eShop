const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = Schema({
  name: string,
});

module.exports = mongoose.model('Role', roleSchema);
