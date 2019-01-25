import React from "react";
import { Link, NavLink } from "react-router-dom";
import SideMenu from "./SideMenu.js";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/" className="nav-logo">
          Logo Goes Here
        </Link>
        <NavLink
          exact
          to="/"
          className="nav-text"
          activeClassName="nav-text-active"
        >
          Landing
        </NavLink>
        <NavLink to="/1" className="nav-text" activeClassName="nav-text-active">
          Page 1
        </NavLink>
        <NavLink to="/2" className="nav-text" activeClassName="nav-text-active">
          Page 2
        </NavLink>
        <NavLink
          to="/logout"
          className="nav-text-logout"
          activeClassName="nav-text-active"
        >
          Logout
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
