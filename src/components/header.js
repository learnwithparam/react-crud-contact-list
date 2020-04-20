import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/add">Add contact</Link>
      </li>
    </ul>
  );
};

const Header = () => {
  return (
    <header>
      <h3>
        <a href="/">Conpro</a>
      </h3>
      <nav>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
