const User = require('../models/User')
const Character = require('../models/Character')
const Powers = require('../models/Powers')


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
            return User.create({ username, email, password });
        },

        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },

        addCharacter: async (parent, { name, finesse, fortitude, influence, might, understanding, minor, severe, grievous }) => {
            return Character.create({ name, finesse, fortitude, influence, might, understanding, minor, severe, grievous });
        },

        addPower: async (parent, { name, description }) => {
            return Powers.create({ name, description });
        }
    }
}

module.exports = resolvers;