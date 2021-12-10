const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        character: [Character]
    }

    type Character {
        _id: ID
        name: String
        finesse: Int
        fortitude: Int
        influence: Int
        might: Int
        understanding: Int
        minor: Int
        severe: Int
        grievous: Int
    }
    
    type Powers {
        name: String
        description: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addUser(_id: ID!, username: String!, email: String!, password: String!): User
        removeUser(userId: ID!): User
        addCharacter(name: String!, finesse: Int!, fortitude: Int!, influence: Int!, might: Int!, understanding: Int!, minor: Int!, severe: Int!, grievous: Int!): Character
        addPower(name: String!, description: String!): Powers
        login(email: String!, password: String!): Auth
    }

    type Query {
        User: [User]
        user(userId: ID!): User
        Character: [Character]
        Powers: [Powers]

    }
`;

module.exports = typeDefs;