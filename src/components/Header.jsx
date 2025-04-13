import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const isUserRoute = location.pathname.startsWith("/user");

  return (
    <nav
      className="navbar p-0 fixed-top d-flex flex-row"
      style={{
        backgroundColor: "rgb(23 25 28)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo-mini" to="/">
          <span style={{ color: "white" }}>Tinfin box</span>
        </Link>
      </div>
      <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        <ul className="navbar-nav w-100">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              activeClassName="active-link"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "white",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about"
              activeClassName="active-link"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "white",
              })}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contactus"
              activeClassName="active-link"
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "white",
              })}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav navbar-nav-right">
          {isLoggedIn && (
            <li className="nav-item dropdown border-left">
              <a
                className="nav-link count-indicator dropdown-toggle"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                <i className="mdi mdi-bell"></i>
                <span className="count bg-danger"></span>
              </a>
            </li>
          )}

          {/* Conditionally render Login/Logout button */}
          {isUserRoute ? (
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                }}
                onClick={handleLogoutClick}
              >
                <div
                  className="preview-thumbnail"
                  style={{ marginRight: "5px" }}
                >
                  <div className="preview-icon bg-dark rounded-circle p-2">
                    <i className="mdi mdi-logout text-danger"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p
                    className="preview-subject mb-1"
                    style={{ color: "white" }}
                  >
                    Logout
                  </p>
                </div>
              </Link>
            </li>
          ) : (
            !isLoggedIn && (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <div
                    className="preview-thumbnail"
                    style={{ marginRight: "5px" }}
                  >
                    <div className="preview-icon bg-dark rounded-circle p-2">
                      <i className="mdi mdi-login text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p
                      className="preview-subject mb-1"
                      style={{ color: "white" }}
                    >
                      Login
                    </p>
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-format-line-spacing"></span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
