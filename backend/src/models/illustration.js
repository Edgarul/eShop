const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const illustrationSchema = Schema({
  name: string,
  description: string,
  photoUrl: string,
  cost: number,
  illusSubCategory: { type: Schema.ObjectId, ref: 'IllusSubCategory' },
  creationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Illustration', illustrationSchema);
