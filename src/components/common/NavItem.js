import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        to={props.to}
        activeClassName="text-primary"
      >
        {props.label}
      </NavLink>
    </li>
  );
}

export default NavItem;
