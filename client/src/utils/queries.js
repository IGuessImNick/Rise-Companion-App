import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query User {
        User {
            _id
            username
            email
            password
        }
    }
`;

export const QUERY_POWERS = gql`
    query Powers {
        Powers {
            name
            description
        }
    }
`;

export const QUERY_CHARACTER = gql`
    query Character($_id: String) {
        Character(_id: $_id) {
            _id
            name
            finesse
            fortitude
            influence
            might
            understanding
            minor
            severe
            grievous
        }
    }
`