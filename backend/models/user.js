const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 30,
    lowercase: true,
    trim: true,
  },
  firstname: {
    type: String,
    required: true,
    maxLength: 50,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    maxLength: 50,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

module.exports = mongoose.model("User", userSchema);
