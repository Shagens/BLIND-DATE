import {gql} from '@apollo/client';

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
  mutation addAttributes($quiz: listAttributes!) {
    addAttributes(quiz: $quiz) {
      entryDate
      quiz {
        _id
      name
      hobbies
      favorite_music
      smoker
      drinker
      favorite_foods
      books
      sports
      gym
      pets {
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

export const REMOVE_ATTRIBUTES = gql`
mutation removeAttributes($userAttributes: ID!) {
    removeAttributes(userAttributes:$userAttributes) {
        entryDate
        quiz {
          _id
        name
        hobbies
        favorite_music
        smoker
        drinker
        favorite_foods
        books
        sports
        gym
        pets
        quiz{
          name
        } 
        }
      }
    }
  `;
