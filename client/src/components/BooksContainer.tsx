import React from 'react';
import { Book } from '../types/types';
import BookSlide from './BookSlide';

function BooksContainer({books, header}: {books :Book[], header: string}) {
    return (
        <div className="bookList">
            <div className="bookList_Content">
                <div className="title">{header}</div>
                <div className="tiles">
                {books.map((el: Book) => (
                    <BookSlide id={el.id} name={el.name} img={el.img} />
            ) )}
            </div>
        </div>
      </div>
    );
}

export default BooksContainer;