const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const profileSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    characters: [
        {
          _id: Number,
          
          characterName: String,

          finesse: Number,

          fortitude: Number,

          influence: Number,

          might: Number,

          understanding: Number,

          minor: Number,

          severe: Number,

          grievous: Number,

          abilities: [
            {
              _id: {
                type: Number
              },
              abilityName: {
                type: String
              },
            }
          ]
        }
    ]
  });
  
  // set up pre-save middleware to create password
  profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', profileSchema);
  
  module.exports = User;