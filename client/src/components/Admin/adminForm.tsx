import React, { ChangeEvent, useState } from "react";
import { Book } from "../../types/types";

function AdminForm({
  initName = '',
  initYear = 2000,
  initGenre = '',
  initAuthor = '',
  initDesc = '',
  initEditors = '',
  initLanguage = '',
  initPaperback = '',
  disabled,
  onSubmit,
}) {
  const initState: Book = {
    name: initName ,
    year: initYear ,
    genre: initGenre ,
    author: initAuthor ,
    img: '/testImg.jpg',
    description: initDesc ,
    editors: initEditors ,
    language: initLanguage ,
    paperback: initPaperback ,
  };

  const [reg, setReg] = useState<Book>(initState);
  const [isFormValid, setIsFormValid] = useState(false);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setReg((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    setIsFormValid(
      reg.name !== "" && reg.author !== "" && reg.description !== "" && reg.genre !== ""
    );
    
  };

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();    
      onSubmit(reg)
      setReg(initState)}}>
      <input
      disabled={disabled}
        name="name"
        placeholder="title"
        value={reg.name}
        onChange={inputHandler}
      ></input>
      <input
      disabled={disabled}
        name="author"
        placeholder="author"
        value={reg.author}
        onChange={inputHandler}
      ></input>
      <input
      disabled={disabled}
        name="genre"
        placeholder="genre"
        value={reg.genre}
        onChange={inputHandler}
      ></input>
      <input
      disabled={disabled}
        name="year"
        placeholder="year"
        value={reg.year}
        onChange={inputHandler}
      ></input>
      <input
      disabled={disabled}
        name="description"
        placeholder="description"
        value={reg.description}
        onChange={inputHandler}
      ></input>
      <input
      disabled={disabled}
        name="editors"
        placeholder="editors"
        value={reg.editors}
        onChange={inputHandler}
      ></input>
      <input
      disabled={disabled}
        name="language"
        placeholder="language"
        value={reg.language}
        onChange={inputHandler}
      ></input>
      <input
      disabled={disabled}
        name="paperback"
        placeholder="paperback"
        value={reg.paperback}
        onChange={inputHandler}
      ></input>

      <button type="submit" className="form-button" disabled={!isFormValid || disabled}>
        Submit
      </button>
    </form>
  );
}

export default AdminForm;
