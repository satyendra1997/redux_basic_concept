import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <h1>Contact Your Manager</h1>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Contact Form</Link>
          </li>
          <li>
            <Link to="/contactlist">Contact List</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
