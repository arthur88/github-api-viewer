import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
