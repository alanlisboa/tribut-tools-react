import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom mb-3 box-shadow">
        <div className="container">
          <NavLink className="navbar-brand" to="/" exact>
            TributTools
          </NavLink>
          <ul className="navbar-nav mr-auto">
            <NavItem to="/ncms" label="NCM" />
            <NavItem to="/cfops" label="CFOP" />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
