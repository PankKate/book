import React from "react";
import CategoriesBlock from "../components/Category/CategoriesBlock";
import Popular from "../components/Popular/Popular";
import { useQuery } from "@apollo/client";
import BooksContainer from "../components/BookList/BooksContainer";
import { GET_BOOKS_BASIC } from "../requests/book_req";


function Main() {
  const { loading, error, data } = useQuery(GET_BOOKS_BASIC);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div className="container">
      <CategoriesBlock></CategoriesBlock>
      <Popular></Popular>
      <BooksContainer books={data.books} header={"All Books"} />
    </div>
  );
}

export default Main;
