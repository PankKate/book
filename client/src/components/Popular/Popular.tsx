import { useQuery } from "@apollo/client";
import {  Book_Basic } from "../../types/types";
import { GET_POPULAR } from "../../requests/book_req";
import BookTile from "../BookList/BookTile";

function Popular() {
  const { loading, data } = useQuery(GET_POPULAR);
   if (loading) return <p>Loading...</p>;

  return (
    <div className="popular">
      <section className="popul_content">
        <h2 className="title">Popular now </h2>
        <div className="tiles">
          {data.popular.book.map((el: Book_Basic) => (
            <BookTile key={el.id} id={el.id} name={el.name} img={el.img} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Popular;
