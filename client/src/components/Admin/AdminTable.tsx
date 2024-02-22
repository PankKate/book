import { useQuery } from '@apollo/client';
import { GET_BOOKS } from "../../requests/book_req";
import { onEditF, Book_FullData } from "../../types/types";
import TableRow from "./TableRow";



function AdminTable({ onEdit }: { onEdit:onEditF }) {
 const { loading, data, refetch } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  
  return (
    <section className="table">
      <div>
        <ul className="title">
          <li>Name</li>
          <li>Author</li>
          <li>Genre</li>
          <li>Year</li>
          <li>Edit</li>
        </ul>
      </div>
      {data.books.map((book:Book_FullData) => 
        <TableRow key={book.id} book = {book} onEdit={onEdit} refetch={refetch}/>
      )}
    </section>
  );
}

export default AdminTable;
