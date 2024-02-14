import React, { useEffect, useState } from "react";
import BookSlide from "../BookSlide";
import { useQuery, gql } from '@apollo/client';
import { Book } from "../../types/types";


const GET_POPULAR = gql`
{popular {
  book {
    id
    name
    img
  }
}
}
`;

function Popular() {
   
  const {loading, error, data} = useQuery(GET_POPULAR);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
 

  
  
   return (
    <div className="popular">
      <div className="popul_content">
        <div className="title">Popular now </div>
        <div className="tiles">
          {data.popular.book.map((el: Book) => (
            <BookSlide key={el.id} id={el.id} name={el.name} img={el.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
