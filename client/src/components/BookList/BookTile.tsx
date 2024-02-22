import React from "react";
import { useNavigate } from "react-router-dom";

function BookTile({id,name,img}: {id: number;name: string; img: string | undefined}): JSX.Element {
  const navigate = useNavigate();

  return (
    <section className="bookTile" onClick={() => navigate(`/book/${id}`)}>
      <img src={`/covers/${img}`}></img>
      <span>{name}</span>
    </section>
  );
}

export default BookTile;
