import { useMutation } from "@apollo/client";
import { UPDATE_BOOK } from "../../requests/book_req";
import AdminForm from "./AdminForm";
import { Book_FullData, Book_MainData, onFinishEditF } from "../../types/types";

const EditBook = ({ book, onFinish }: {book: Book_FullData, onFinish: onFinishEditF}) => {
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

        onSubmit={(item: Book_MainData) => {
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

  export default EditBook;