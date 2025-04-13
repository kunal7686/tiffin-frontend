import React from "react";

import Sidebar from "./componenets/Sidebar";
import Navbar from "./componenets/Navbar";
import DashboardContent from "./componenets/DashboardContent";
import Footer from "./componenets/Footer";

function AdminDashboard() {
  return (
    <div>
      <div className="container-scroller">
        <Sidebar />
        <div className="container-fluid page-body-wrapper">
          <Navbar />
          <div className="main-panel">
            <DashboardContent />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
