// Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [uiBasicOpen, setUiBasicOpen] = useState(false);
  const [userPagesOpen, setUserPagesOpen] = useState(false);

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
       <div className="sidebar-brand-wrapper d-flex align-items-center justify-content-center fixed-top">
                <Link className="sidebar-brand brand-logo" to="/">
                    <span className="sidebar-logo-text" style={{color:"whitesmoke"}}>TiffinBox</span>  {/* Dummy Logo Text */}
                </Link>
                <Link className="sidebar-brand brand-logo-mini" to="/">
                    <span className="sidebar-logo-text-mini">TB</span>  {/* Dummy Logo Text Mini */}
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

        {/*  Example of another menu item - you can delete the content of commented part*/}
        {/*<li className="nav-item menu-items">*/}
        {/*    <div*/}
        {/*        className="nav-link"*/}
        {/*        onClick={() => setUiBasicOpen(!uiBasicOpen)}*/}
        {/*        aria-expanded={uiBasicOpen}*/}
        {/*    >*/}
        {/*        <span className="menu-icon">*/}
        {/*            <i className="fa fa-laptop" aria-hidden="true"></i>*/}
        {/*        </span>*/}
        {/*        <span className="menu-title">Basic UI Elements</span>*/}
        {/*        <i className="menu-arrow"></i>*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*        className={uiBasicOpen ? "collapse show" : "collapse"}*/}
        {/*        id="ui-basic"*/}
        {/*    >*/}
        {/*        <ul className="nav flex-column sub-menu">*/}
        {/*            <li className="nav-item">*/}
        {/*                <Link className="nav-link" to="/ui-features/buttons">*/}
        {/*                    Buttons*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item">*/}
        {/*                <Link className="nav-link" to="/ui-features/dropdowns">*/}
        {/*                    Dropdowns*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item">*/}
        {/*                <Link className="nav-link" to="/ui-features/typography">*/}
        {/*                    Typography*/}
        {/*                </Link>*/}
        {/*            </li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}

export default Sidebar;
