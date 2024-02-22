import "./sass/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Book from "./pages/Book";
import BookList from "./pages/BookList";
import { useState } from "react";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [login, setLogin] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  function getAuth() {
    setLogin(localStorage.getItem("login"));
    setEmail(localStorage.getItem("email"));
  }

  return (
    <ApolloProvider client={client}>
      <Navbar login={login} email={email} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/auth" element={<Auth getAuth={getAuth} />} />
          <Route path="/bookList/:genre" element={<BookList />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
