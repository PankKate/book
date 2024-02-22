import { useState } from "react";
import AddBook from "../components/Admin/AddBook";
import AdminTable from "../components/Admin/AdminTable";
import EditBook from "../components/Admin/EditBook";
import { Book_FullData } from "../types/types";



function Admin():JSX.Element {
  const [editing, setEditing] = useState<null|Book_FullData>(null);
  return (
    <main className="container">
      <div className="adminForm">
        {editing ? (
          <EditBook book={editing} onFinish={() => setEditing(null)} />
        ) : (
          <AddBook />
        )}
      </div>
      <AdminTable onEdit={setEditing} />
    </main>
  );
}

export default Admin;
