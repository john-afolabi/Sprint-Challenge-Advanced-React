import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { Button } from "reactstrap";

export default function NavBar() {
  const [darkmode, setDarkmode] = useDarkMode();

  const toggleMode = event => {
      setDarkmode(!darkmode)
  }

  return (
    <nav className="navbar">
      <span className="navbar-brand mb-0 h1">
        Womens World Cup Player Trends
      </span>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Button onClick={toggleMode}>Dark Mode</Button>
        </li>
      </ul>
    </nav>
  );
}
