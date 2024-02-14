import React from 'react';
import CategoriesBlock from '../components/Category/CategoriesBlock';
import Popular from '../components/Popular/Popular';
import { gql, useQuery } from '@apollo/client';
import BooksContainer from '../components/BooksContainer';

const GET_BOOKS = gql`
{
    books {
      id
      name
      img
    }
  }
`;

function Main() {
    const {loading, error, data} = useQuery(GET_BOOKS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
   
    
    return (
        <div className='container'>
            <CategoriesBlock></CategoriesBlock>
            <Popular></Popular>
            <BooksContainer books={data.books} header={'All Books'}/>
        </div>
    );
}

export default Main;