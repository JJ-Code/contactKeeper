const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'

  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String
  },
  type:{
    
  }
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema)