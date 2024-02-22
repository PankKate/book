import React from "react";
import CategoriesBlock from "../components/Category/CategoriesBlock";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import BookSlide from "../components/BookList/BookTile";
import { Book } from "../types/types";
import BooksContainer from "../components/BookList/BooksContainer";

const GET_GENRE = gql`
  query BooksGenre($genre: String) {
    booksGenre(genre: $genre) {
      id
      name
      img
    }
  }
`;

function BookList() {
  const params = useParams<{ genre: string }>();
  const genre = params.genre;

  const { loading, error, data } = useQuery(GET_GENRE, {
    variables: { genre },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div className="container">
      <CategoriesBlock />
      <BooksContainer books={data.booksGenre} header={String(genre)} />
    </div>
  );
}

export default BookList;
