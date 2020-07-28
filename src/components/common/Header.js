import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const activeStyle = {
    textDecoration: "underline",
    border: "1px solid",
    padding: "10px",
    boxShadow: "5px 10px #410D78"
  };

  return (
    <div className="shadow-sm container-fluid">
      <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-none">
        <Link to="/">
         <h1 id="logo" className="navbar-brand">
          <span role="img" aria-label="notemoji">
            🎶
          </span>
          MELODIFY
        </h1>
        </Link>
        <NavLink className="nav-link" activeStyle={activeStyle} to="/" exact>
          HOME
        </NavLink>
        {"         "}
        <NavLink className="nav-link" activeStyle={activeStyle} to="/about">
          ABOUT
        </NavLink>
        {"         "}
        <NavLink className="nav-link" activeStyle={activeStyle} to="/mlh">
          MLH
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
