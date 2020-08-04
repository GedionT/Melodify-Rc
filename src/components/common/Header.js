import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const activeStyle = {
    textDecoration: "underline",
    border: "1px solid",
    padding: "10px",
    boxShadow: "6px 10px #410D78"
  };
  // navbar-fixed-top navbar-dark bg-none
  return (
    <div id="nav-contianer" className="shadow-sm sticky-top container-fluid">
      <nav className="navbar navbar-expand">
        <Link to="/">
          <h1 id="logo" className="navbar-brand">
            <span role="img" aria-label="notemoji">
              🎶
            </span>
            MELODIFY
          </h1>
        </Link>
        <ul className="navbar-nav ml-auto">
          <NavLink className="nav-link" activeStyle={activeStyle} to="/" exact>
            HOME
          </NavLink>
          {"    |    "}
          <NavLink className="nav-link" activeStyle={activeStyle} to="/about">
            ABOUT
          </NavLink>
          {"    |    "}
          <NavLink className="nav-link" activeStyle={activeStyle} to="/mlh">
            MLH
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
