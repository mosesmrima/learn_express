const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true
  }
});

module.exports = mongoose.model('User', userSchema);
