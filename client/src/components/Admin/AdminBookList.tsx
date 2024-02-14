import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import BookSlide from "../BookSlide";
import { Book } from "../../types/types";
import BookRow from "./BookRow";
import AdminForm from "./adminForm";

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
const imageBasePath =
  window.location.protocol + "//" + window.location.host + "/covers/";
function AdminBookList({ onEdit }) {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);
  const [deleteBook] = useMutation(DELETE_BOOK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;


  return (
    <section className="table">
      <main>
        <ul className="title">
          <li>Name</li>
          <li>Author</li>
          <li>Genre</li>
          <li>Year</li>
          <li>Edit</li>
        </ul>
      </main>
      {data.books.map((book) => {
        const {
          id,
          name,
          year,
          genre,
          author,
          img,
          description,
          editors,
          language,
          paperback,
        } = book;
        return (
          <article className="row">
            <ul>
              <li>{name}</li>
              <li>{author}</li>
              <li>{genre}</li>
              <li>{year}</li>
              <li className="editBtns">
                <button
                  className="editBtn"
                  onClick={() => {
                    onEdit(book);
                  }}
                >
                  edit
                </button>
                <button
                  className="removeBtn"
                  onClick={() => {
                    deleteBook({
                      variables: { deleteBookId: id - 1 },
                    });
                    refetch();
                  }}
                >
                  delete
                </button>
              </li>
            </ul>
            <ul className="moreContent">
              <li>
                <img src={imageBasePath + img}></img>
              </li>
              <li className="desc">
                <div className="moreContentHeader">Description:</div>
                {description}
              </li>
              <li>
                <div className="moreContentHeader">Editors:</div>
                {editors}
              </li>
              <li>
                <div className="moreContentHeader">Language:</div>
                {language}
              </li>
              <li>
                <div className="moreContentHeader">Paperback: </div>
                {paperback}
              </li>
            </ul>
          </article>
        );
      })}
    </section>
  );
}

const AddBook = () => {
  const [addBook, { loading }] = useMutation(ADD_BOOK);

  return (
    <AdminForm
      disabled={loading}
      onSubmit={(item) => {
        addBook({
          variables: {
            name: item.name,
            year: Number(item.year),
            genre: item.genre,
            author: item.author,
            img: item.img,
            description: item.description,
            editors: item.editors,
            language: item.language,
            paperback: item.paperback,
          },
          update: (cache, { data: { addBook } }) => {
            const data = cache.readQuery({ query: GET_BOOKS });
            const newBooks = [...data.books, addBook];
         

            cache.writeQuery({ query: GET_BOOKS, data: { books: newBooks } });
          },
        });
      }}
    />
  );
};

const EditBook = ({ book, onFinish }) => {
  const [editBook, { loading }] = useMutation(UPDATE_BOOK);
  const {
    id,
    name,
    year,
    genre,
    author,
    description,
    editors,
    language,
    paperback,
  } = book;
  return (
    <AdminForm
      disabled={loading}
      initName={name}
      initYear={year}
      initGenre={genre}
      initAuthor={author}
      initDesc={description}
      initEditors={editors}
      initLanguage={language}
      initPaperback={paperback}
      onSubmit={(item) => {
        editBook({
          variables: {
            updateBookId: id - 1,
            name: item.name,
            year: Number(item.year),
            genre: item.genre,
            author: item.author,
            img: item.img,
            description: item.description,
            editors: item.editors,
            language: item.language,
            paperback: item.paperback,
          },
        });
        onFinish();
      }}
    />
  );
};

export { AdminBookList, AddBook, EditBook };
