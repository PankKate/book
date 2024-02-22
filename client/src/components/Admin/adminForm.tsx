import { ChangeEvent, FormEvent, useState } from "react";
import {Book_MainData, adminFormProps } from "../../types/types";

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
}: adminFormProps) {
  const initState: Book_MainData = {
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

  const [reg, setReg] = useState<Book_MainData>(initState);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setReg((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    setIsFormValid(
      reg.name !== "" && reg.author !== "" && reg.description !== "" && reg.genre !== ""
    );
  };

  function submitForm(e: FormEvent<HTMLFormElement>):void{
      e.preventDefault();    
      onSubmit(reg)
      setReg(initState)
  }

  return (
    <form onSubmit={(e)=>submitForm(e)}>
      {Object.keys(reg).map((key:string)=> 
      <input
        key={key}
        name={key}
        placeholder={key}
        value={reg[key]}
        onChange={inputHandler}/>
        )}

      <button type="submit" className="form-button" disabled={!isFormValid || disabled}>
        Submit
      </button>
    </form>
  );
}

export default AdminForm;
