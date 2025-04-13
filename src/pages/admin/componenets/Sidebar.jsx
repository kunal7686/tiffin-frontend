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
          </span>{" "}
          {/* Dummy Logo Text */}
        </Link>
        <Link className="sidebar-brand brand-logo-mini" to="/">
          <span className="sidebar-logo-text-mini">TB</span>{" "}
          {/* Dummy Logo Text Mini */}
        </Link>
      </div>
      <ul className="nav">
        <li
          className={`nav-item menu-items ${
            isActive("/admin/dashboard") ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/admin/dashboard">
            <span className="menu-icon">
              <i className="fa fa-tachometer" aria-hidden="true"></i>
            </span>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>

        <li
          className={`nav-item menu-items ${
            isActive("/admin/dashboard/manage-dishes") ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/admin/dashboard/manage-dishes">
            <span className="menu-icon">
              <i className="fa fa-cutlery" aria-hidden="true"></i>
            </span>
            <span className="menu-title">Manage Dishes</span>
          </Link>
        </li>

        <li
          className={`nav-item menu-items ${
            isActive("/admin/dashboard/manage-orders") ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/admin/dashboard/manage-orders">
            <span className="menu-icon">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span className="menu-title">Manage Orders</span>
          </Link>
        </li>

        <li
          className={`nav-item menu-items ${
            isActive("/admin/dashboard/manage-users") ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/admin/dashboard/manage-users">
            <span className="menu-icon">
              <i className="fa fa-users" aria-hidden="true"></i>
            </span>
            <span className="menu-title">Manage Users</span>
          </Link>
        </li>

        <li
          className={`nav-item menu-items ${
            isActive("/admin/dashboard/manage-chefs") ? "active" : ""
          }`}
        >
          <Link className="nav-link" to="/admin/dashboard/manage-chefs">
            <span className="menu-icon">
              <i className="fa fa-user-md" aria-hidden="true"></i>
            </span>
            <span className="menu-title">Manage Chefs</span>
          </Link>
        </li>

        {/*
        <li className="nav-item menu-items">
          <Link className="nav-link" to="/settings">
            <span className="menu-icon">
              <i className="fa fa-cog" aria-hidden="true"></i>
            </span>
            <span className="menu-title">Settings</span>
          </Link>
        </li>
        */}
      </ul>
    </nav>
  );
}

export default Sidebar;
