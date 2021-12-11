import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($_id: String!, $username: String!, $email: String!, $password: String!) {
        addUser(_id: $_id, username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`