
import { Book_Basic } from "../../types/types";
import BookSlide from "./BookTile";

function BooksContainer({
  books,
  header,
}: {
  books: Book_Basic[];
  header: string;
}): JSX.Element {
  return (
    <section className="bookList">
      <h2 className="title">{header}</h2>
      <div className="tiles">
        {books.map((el: Book_Basic) => (
          <BookSlide key={el.id} id={el.id} name={el.name} img={el.img} />
        ))}
      </div>
    </section>
  );
}

export default BooksContainer;
