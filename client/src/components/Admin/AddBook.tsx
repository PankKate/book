import { useMutation } from "@apollo/client";
import { ADD_BOOK, GET_BOOKS } from "../../requests/book_req";
import AdminForm from "./AdminForm";
import { Book_MainData } from "../../types/types";

const AddBook = () => {
    const [addBook, { loading }] = useMutation(ADD_BOOK);
  
    return (
      <AdminForm
        disabled={loading}
        onSubmit={(item:Book_MainData) => {
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
  
  export default AddBook;