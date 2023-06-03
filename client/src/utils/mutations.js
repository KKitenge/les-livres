import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $authors: [String]!
    $bookId: String!
    $title: String!
    $description: String!
    $image: String!
    $link: String!
  ) {
    saveBook(
      authors: $authors
      bookId: $bookId
      title: $title
      description: $description
      image: $image
      link: $link
    ) {
      _id
      username
      email
      savedBooks {
        authors
        bookId
        title
        description
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        authors
        bookId
        title
        description
        image
        link
      }
    }
  }
`;
