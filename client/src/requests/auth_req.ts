import { gql } from "@apollo/client";

const GET_USER = gql`
  query Query($email: String!, $password: String!) {
    userID(email: $email, password: $password) {
      login
      password
      email
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser($login: String!, $password: String!, $email: String!) {
    addUser(login: $login, password: $password, email: $email) {
      success
      data {
        login
        password
        email
      }
    }
  }
`;

export { GET_USER, ADD_USER };