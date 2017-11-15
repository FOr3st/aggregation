const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: String,
  code: String
});

module.exports = mongoose.model('Country', countrySchema);
