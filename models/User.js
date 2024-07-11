

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  weatherData: [{
    date: String,
    data: Object,
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

