import gql from 'graphql-tag';

export const QUERY_QUIZ = gql`
  query getQuiz($category: ID) {
    quiz(category: $category) {
      _id
      name
      female
      male
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_QUIZ = gql`
  {
    products {
      _id
      name
      females
      males
      
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    attributes {
      _id
      entryDate
      quiz {
        _id
        name
        description
        dob
        main qualities
        image
      }
    }
  }
}
`;

export const QUERY_RESULTS = gql`
  query getResults($quiz: [ID]!) {
    results(quiz: $quiz) {
      session
    }
  }
`;
