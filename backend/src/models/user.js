const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  email: string,
  password: string,
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
