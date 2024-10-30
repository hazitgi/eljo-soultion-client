// src/graphql/queries.js
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
query Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    access_token
    user {
      id
      name
      email
      resetToken
      resetTokenExpiry
      role
      created_at
      updated_at
    }
  }
}
`;
