import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [uiBasicOpen, setUiBasicOpen] = useState(false);
  const [userPagesOpen, setUserPagesOpen] = useState(false);

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
        <li className="nav-item menu-items">
          <Link className="nav-link" to="/all-dishes">
            <span className="menu-icon">
              <i className="fa fa-cutlery" aria-hidden="true"></i>
            </span>
            <span className="menu-title">All Dishes</span>
          </Link>
        </li>

        {/*<li className="nav-item menu-items">*/}

        {/*</li>*/}
      </ul>
    </nav>
  );
}

export default Sidebar;
