import React from 'react';
import { useParams } from 'react-router-dom';
import BookInfo from '../components/BookInfo/BookInfo';

function Book() {
    const params = useParams<{ id: string }>();
    const id = Number(params.id);
    
    return (
        <div className='container'>
            <BookInfo id={Number(id)}/>
        </div>
    );
}

export default Book;