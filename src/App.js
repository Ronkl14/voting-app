import "./App.css";
import { useState, useEffect } from "react";
import { PAGES } from "./constants";
import { Login, Vote, Admin } from "./pages";

const userData = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

function App() {
  const [page, setPage] = useState("login");

  const [login, vote, admin] = PAGES;

  useEffect(() => {
    if (!userData) {
      setPage(login);
    } else {
      setPage(vote);
    }
  }, [login, vote]);

  switch (page) {
    case login:
      return <Login setPage={setPage} />;
    case vote:
      return <Vote setPage={setPage} />;
    case admin:
      return <Admin setPage={setPage} />;
    default:
      return <Login setPage={setPage} />;
  }
}

export default App;
