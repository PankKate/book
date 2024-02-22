import {  useLazyQuery } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../../types/types";
import { GET_USER } from "../../requests/auth_req";

const initState: ILogin = {
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
  const [reg, setReg] = useState<ILogin>(initState);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDataTrue, setIsDataTrue] = useState(true);

  const [checkForm] = useLazyQuery(GET_USER);
  const navigate = useNavigate();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setReg((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    setIsFormValid(reg.email !== "" && reg.password !== "");
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkForm({ variables: { email: reg.email, password: reg.password } }).then(
      (res) => {
        if (res.data.userID !== null) {
          localStorage.setItem("login", res.data.userID.login);
          localStorage.setItem("email", res.data.userID.email);
          getAuth();
          navigate("/");
        } else {
          setIsDataTrue(false);
        }
      }
    );
  };

  return (
    <form onSubmit={submitHandler} className="authForm">
      <div className="title">Log In</div>
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
        {!isDataTrue && (
          <span className="warning">
            Maybe email doesn't exist Or wrong password, maybe
          </span>
        )}
        <span onClick={() => setIsLogin(false)}>Signup</span>
      </div>
      <button type="submit" className="form-button" disabled={!isFormValid}>
        Log In
      </button>
    </form>
  );
}

export default RegisterForm;
