const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  message: String,
  timestamps: true,

});

module.exports = pinSchema
