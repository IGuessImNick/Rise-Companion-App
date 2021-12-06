const { Profile } = require('../models')

const resolvers = {
    Query: {
        profiles: async () => {
            return await Profile.find({})
        }
    }
}

module.exports = resolvers;