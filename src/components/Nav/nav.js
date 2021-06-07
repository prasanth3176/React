import React from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";
import ReactLogo from "./logo192.png";
const Nav = () => {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <a href="/">
        <img className={"header-logo"} src={ReactLogo} />
      </a>
      <ul className="nav-links">
        <NavLink to="/lifeCycle">
          <li style={navStyle}>LifeCycle</li>
        </NavLink>
        <NavLink to="/useReducer">
          <li style={navStyle}>useReducer</li>
        </NavLink>
        <NavLink to="/useContext">
          <li style={navStyle}>useContext</li>
        </NavLink>
        <NavLink to="/useContextWithuseReducer">
          <li style={navStyle}>useContext With useReducer</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
