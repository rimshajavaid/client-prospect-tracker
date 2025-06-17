const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  domain: String,
  status: String,
  lastContacted: Date,
  tags: [String]
});

module.exports = mongoose.model('Client', clientSchema);
