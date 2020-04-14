import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/" exact>
            TributTools
          </NavLink>
          <ul className="navbar-nav mr-auto">
            <NavItem to="/ncm" label="NCM" />
            <NavItem to="/cfop" label="CFOP" />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
