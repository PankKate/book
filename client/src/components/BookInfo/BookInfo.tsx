import { useQuery } from "@apollo/client";
import { GET_BOOK } from "../../requests/book_req";


function BookInfo({ id }: { id: number }) {
  const { loading,  data } = useQuery(GET_BOOK, {
    variables: { bookId: id },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="bookMain">
        <img src={`/covers/${data.bookID.img}`}></img>
        <section className="info">
          <h3 className="title">{data.bookID.name}</h3>
          <h3 className="title">{data.bookID.author}</h3>
          <span>Here a little promo for book soon!</span>
        </section>
      </div>

      <section className="bookMore">
        <section className="description">
        <h3 className="title">Description</h3>
          <span >{data.bookID.description}</span>
        </section>
        <section className="info">
        <h3 className="title">Editors</h3>
          <span >{data.bookID.editors}</span>
          <h3 className="title">Language</h3>
          <span >{data.bookID.language}</span>
          <h3 className="title">Paperback</h3>
          <span >{data.bookID.paperback}</span>
        </section>
      </section>
    </>
  );
}

export default BookInfo;
