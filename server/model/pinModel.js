const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema(
  {
    lat: {
      type: Number,
      required: true,
    },
    lon: {
      type: Number,
      required: true,
    },
    message: String,
  },
  { timestamp: true }
);

module.exports = pinSchema;
