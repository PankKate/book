import { gql} from "@apollo/client";

const GET_BOOKS = gql`
  {
    books {
      id
      name
      year
      genre
      author
      img
      description
      editors
      language
      paperback
    }
  }
`;

const GET_BOOKS_BASIC = gql`
  {
    books {
      id
      name
      img
    }
  }
`;

const GET_BOOK = gql`
  query BookID($bookId: Int) {
    bookID(id: $bookId) {
      name
      year
      genre
      author
      img
      description
      editors
      language
      paperback
    }
  }
`;


const ADD_BOOK = gql`
  mutation AddBook(
    $name: String!
    $year: Int!
    $genre: String!
    $author: String!
    $img: String!
    $description: String!
    $editors: String
    $language: String
    $paperback: String
  ) {
    addBook(
      name: $name
      year: $year
      genre: $genre
      author: $author
      img: $img
      description: $description
      editors: $editors
      language: $language
      paperback: $paperback
    ) {
      data {
        id
        name
        year
        genre
        author
        img
        description
        editors
        language
        paperback
      }
    }
  }
`;

const UPDATE_BOOK = gql`
  mutation UpdateBook(
    $updateBookId: Int!
    $name: String!
    $year: Int!
    $genre: String!
    $author: String!
    $img: String!
    $description: String
    $editors: String
    $language: String
    $paperback: String
  ) {
    updateBook(
      id: $updateBookId
      name: $name
      year: $year
      genre: $genre
      author: $author
      img: $img
      description: $description
      editors: $editors
      language: $language
      paperback: $paperback
    ) {
      data {
        id
        name
        year
        genre
        author
        img
        description
        editors
        language
        paperback
      }
    }
  }
`;
const DELETE_BOOK = gql`
  mutation DeleteBook($deleteBookId: Int!) {
    deleteBook(id: $deleteBookId) {
      data {
        id
        name
        year
        genre
        author
        img
        description
        editors
        language
        paperback
      }
    }
  }
`;

const GET_POPULAR = gql`
  {
    popular {
      book {
        id
        name
        img
      }
    }
  }
`;



export { GET_BOOKS, GET_BOOKS_BASIC, GET_BOOK, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK, GET_POPULAR};