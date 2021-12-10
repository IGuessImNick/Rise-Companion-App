const User = require('../models/User')
const Character = require('../models/Character')
const Powers = require('../models/Powers')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        User: async () => {
            return await User.find({})
        },
        Character: async () => {
            return await Character.find({})
        },
        Powers: async () => {
            return await Powers.find({})
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return await User.create({ username, email, password });
            // const user = await User.create({ username, email, password });
            // return user
        },

        removeUser: async (parent, { userId }) => {
            return await User.findOneAndDelete({ _id: userId });
        },

        addCharacter: async (parent, { name, finesse, fortitude, influence, might, understanding, minor, severe, grievous }) => {
            return await Character.create({ name, finesse, fortitude, influence, might, understanding, minor, severe, grievous });
        },

        addPower: async (parent, {name, description}) => {
            const power = await Powers.create({ name, description });
            return power;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
    }
}

module.exports = resolvers;