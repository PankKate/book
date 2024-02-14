import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({
  login,
  email,
}: {
  login: string | null;
  email: string | null;
}): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");

  const imageBasePath =
    window.location.protocol + "//" + window.location.host + "/elements/";

  function changeSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function logout() {
    localStorage.clear();
    window.location.replace(
      `${window.location.protocol}//${window.location.host}/Auth`
    );
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-row">
          <div
            className="navbar__logo"
            onClick={() =>
              window.location.replace(
                window.location.protocol + "//" + window.location.host
              )
            }
          >
            <img src={imageBasePath + "/shape-68.png"} />
            <span>BookFan</span>
          </div>
          {login && (
            <div className="navbar__search">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                placeholder="Найти название, автора, издание ..."
                value={searchValue}
                onChange={changeSearchValue}
              />
            </div>
          )}
          <div className="navbar__profile">
            {email === "Admin@yandex.ru" && (
              <span
                onClick={() =>
                  window.location.replace(
                    window.location.protocol +
                      "//" +
                      window.location.host +
                      "/admin"
                  )
                }
                style={{ cursor: "pointer" }}
              >
                Admin
              </span>
            )}
            {email && email !== "Admin@yandex.ru" && <span>Hi, {login}</span>}
            {login ? (
              <button onClick={() => logout()}>Log Out</button>
            ) : (
              <button
                onClick={() =>
                  window.location.replace(
                    window.location.protocol +
                      "//" +
                      window.location.host +
                      "/auth"
                  )
                }
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
