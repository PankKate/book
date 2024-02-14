import { gql, useQuery } from "@apollo/client";
import React from "react";

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

function BookInfo({ id }: { id: number }) {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { bookId: id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <>
      <div className="bookMain">
        <img src={`/covers/${data.bookID.img}`}></img>
        <div className="info">
          <div className="title">{data.bookID.name}</div>
          <div className="title">{data.bookID.author}</div>
          <div>Here a little promo for book soon!</div>
        </div>
      </div>
      <div className="bookMore">
        <div className="description">
        <div className="title">Description</div>
          <div >{data.bookID.description}</div>
        </div>
        <div className="info">
        <div className="title">Editors</div>
          <div >{data.bookID.editors}</div>
          <div className="title">Language</div>
          <div >{data.bookID.language}</div>
          <div className="title">Paperback</div>
          <div >{data.bookID.paperback}</div>
        </div>
      </div>
    </>
  );
}

export default BookInfo;
