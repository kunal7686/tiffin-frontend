import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
          Copyright © Your Tiffin Box Service {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;