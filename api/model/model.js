var mongoose = require('mongoose');

var db = require('../config/connection');

var Schema = mongoose.Schema;

var UserSchema = new Schema ({

    userName:{
        type: String,
        trim: true,
        required: "Field required"
    },
     password: {
    type: String,
    trim: true,
    required: "Password is a mandatory field",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password must contain at least 6 characters."
    ]
  },
   email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
    
  },  
});

var User = mongoose.model('User', UserSchema)

module.exports = User;