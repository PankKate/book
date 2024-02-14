const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int
    login: String
    password: String
    email: String
  }

  type Book {
    id: Int
    name: String
    year: Int
    genre: String
    author: String
    img: String
    description: String
    editors: String
    language: String
    paperback: String
  }

  type Popular {
    id: Int
    bookID: [Int]
    book: [Book]
  }

  type Query {
    userID(email: String!, password: String!): User
    bookID(id: Int): Book
    books: [Book]
    booksGenre(genre: String): [Book]
    booksAuthor(author: String): [Book]
    popular: Popular
  }


  type UserResponse {
    success: Boolean!
    data: User
  }

  type BookResponse {
    success: Boolean!
    data: Book
  }



  type Mutation {
    addUser(login: String!, password: String!, email: String!) : UserResponse!

    addBook(name: String!, year: Int!, genre: String!, author: String!, img: String!, description: String!,
      editors: String,
      language: String,
      paperback: String) : BookResponse

      updateBook(id: Int!,
        name: String!,
        year: Int!,
        genre: String!,
        author: String!,
        img: String!,
        description: String,
        editors: String,
        language: String,
        paperback: String) : BookResponse

        deleteBook(id: Int!) : BookResponse
  }
  
`;
module.exports = typeDefs;
