import React from 'react';
import { useNavigate } from 'react-router-dom';


function Category({title, genre, changeCategory}: {title:string, genre:string, changeCategory: (title: string) => void}) {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/bookList/${genre}`)}>
            <input type='radio' id={title} name='categ' />
            <label onMouseEnter={()=>changeCategory(title)} htmlFor={title}>{title}</label>
        </div>
    );
}

export default Category;