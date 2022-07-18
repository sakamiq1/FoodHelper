import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="link-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/foods">Foods</NavLink>
        <NavLink to="/table">Table</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
