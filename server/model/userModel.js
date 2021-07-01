const mongoose = require('mongoose');
const pinSchema = require('./pinModel.js');
const MONGO_URL =
  'mongodb+srv://steven:thisisapassword@cluster0.1t2az.mongodb.net/opin-the-world?retryWrites=true&w=majority';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'opin-the-world',
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: String,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pins: [pinSchema],
});

module.exports = mongoose.model('User', userSchema);
