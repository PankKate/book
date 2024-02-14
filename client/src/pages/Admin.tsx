import React, { useState } from "react";
import {
  AdminBookList,
  AddBook,
  EditBook,
} from "../components/Admin/AdminBookList";

function Admin() {
  const [editing, setEditing] = useState(null);
  return (
    <div className="container">
      <div className="adminForm">
        {editing ? (
          <EditBook book={editing} onFinish={() => setEditing(null)} />
        ) : (
          <AddBook />
        )}
      </div>
      <AdminBookList onEdit={setEditing} />
    </div>
  );
}

export default Admin;
