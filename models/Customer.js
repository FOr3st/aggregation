const mongoose = require('mongoose');

const customerScheme = new mongoose.Schema({
  name: String,
  employees: Number
});

module.exports = mongoose.model('Customer', customerScheme);
