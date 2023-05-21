const mongoose = require('mongoose') // Erase if already required

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

//Export the model
module.exports = mongoose.model('User', userSchema)
