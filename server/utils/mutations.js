import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_ATTRIBUTES = gql`
  mutation addAttributes($quiz: [ID]!) {
    addAttributes(quiz: $quiz) {
      entryDate
      quiz {
        _id
      name
      hobbies
      favorite music
      smoker/non-smoker
      drinker
      favorite foods
      books
      sports
      gym/ no gym
      pets
      category {
        name
      } 
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
