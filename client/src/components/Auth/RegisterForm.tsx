import { gql, useMutation } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IReg } from "../../types/types";
import { ADD_USER } from "../../requests/auth_req";


const initState: IReg = {
  login: "",
  email: "",
  password: "",
};


function RegisterForm({
  getAuth,
  setIsLogin,
}: {
  getAuth(): void;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [reg, setReg] = useState<IReg>(initState);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailAvail, setIsEmailAvail] = useState(false);
  const [addUser] = useMutation(ADD_USER);

  const navigate = useNavigate();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setReg((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    setIsFormValid(reg.login !== "" && reg.email !== "" && reg.password !== "");
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({
      variables: { login: reg.login, password: reg.password, email: reg.email },
    }).then((res) => {
      if (res.data.addUser.success === true) {
        localStorage.setItem("login", res.data.addUser.data.login);
        localStorage.setItem("email", res.data.addUser.data.email);
        getAuth();
        navigate("/");
      } else {
        setIsEmailAvail(true);
      }
    });
  };

  return (
    <form onSubmit={submitHandler} className="authForm">
      <div className="title">Log Up</div>
      <input
        type="login"
        name="login"
        placeholder="nickname"
        value={reg.login}
        onChange={inputHandler}
      ></input>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={reg.email}
        onChange={inputHandler}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={reg.password}
        onChange={inputHandler}
      ></input>
      <div className="links">
        {isEmailAvail && (
          <div className="warning">Этот Email уже занят:с Maybe, </div>
        )}
        <span onClick={() => setIsLogin(true)}>Sign In</span>
      </div>
      <button type="submit" className="form-button" disabled={!isFormValid}>
        Log Up
      </button>
    </form>
  );
}

export default RegisterForm;
