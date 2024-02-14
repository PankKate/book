import React from 'react';
import { useNavigate } from 'react-router-dom';


function BookSlide({id, name, img}: {id: number, name:string, img:string | undefined}) {
    const navigate = useNavigate();
    return (
        <div className='bookTile' onClick={()=> navigate(`/book/${id}`)}>
            <img src={`/covers/${img}`}></img>
            <div>{name}</div>
        </div>
    );
}

export default BookSlide;