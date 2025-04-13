import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-flex align-items-center justify-content-center fixed-top">
        <Link className="sidebar-brand brand-logo" to="/">
          <span className="sidebar-logo-text" style={{ color: "whitesmoke" }}>
            TiffinBox
          </span>
        </Link>
        <Link className="sidebar-brand brand-logo-mini" to="/">
          <span className="sidebar-logo-text-mini">TB</span>
        </Link>
      </div>
      <ul className="nav">
        <li
          className={`nav-item menu-items ${
            isActive("/kitchen/dashboard") ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/kitchen/dashboard">
            <span className="menu-icon">
              <i className="fa fa-cutlery" aria-hidden="true"></i>
            </span>
            <span className="menu-title">All Dishes</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
