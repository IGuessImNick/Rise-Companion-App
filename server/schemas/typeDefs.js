const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
    }

    type Auth {
        token: ID!
        profile: Profile
    }
`;

module.exports = typeDefs;