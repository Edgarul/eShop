const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = Schema({
  firstName: string,
  lastName: string,
  photoUrl: string,
  position: string,
  address: { type: Schema.ObjectId, ref: 'Address' },
  user: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Employee', employeeSchema);
