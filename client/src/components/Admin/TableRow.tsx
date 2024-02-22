import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../../requests/book_req";
import {  Book_FullData, onEditF, refetchBook } from "../../types/types";

const imageBasePath =
  window.location.protocol + "//" + window.location.host + "/covers/";
function TableRow({book, onEdit, refetch}:{book:Book_FullData, onEdit: onEditF, refetch: refetchBook}) {
    
    const {id, name, author, genre, year, img, description, editors, language, paperback} = book
    const [deleteBook] = useMutation(DELETE_BOOK);
    console.log(book);
    
  return (
    <section className="row">
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

      {/* Hidden info */}
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
    </section>
  );
}

export default TableRow;
