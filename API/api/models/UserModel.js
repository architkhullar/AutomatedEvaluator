'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the user'
  },
  email: {
    type: String,
    required: 'Kindly enter the email of the user'
  },
  username: {
    type: String,
    required: 'Kindly enter the username of the user'
  },
  password: {
    type: String,
    required: 'Kindly enter the passworsd of the user'
  },
  role: {
    type: String,
    enum: ['ADMIN', 'EXHIBIT','EVALUATOR'],
    default:'ADMIN'
  }
});


module.exports = mongoose.model('Us', UserSchema);
