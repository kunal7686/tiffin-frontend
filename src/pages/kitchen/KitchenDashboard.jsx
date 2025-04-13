import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import DashboardContent from "./pages/DashboardContent";

function KitchenDashboard() {
  return (
    <div>
      <div className="container-scroller">
        <Sidebar />
        <div className="container-fluid page-body-wrapper">
          <Navbar />
          <div className="main-panel">
            <DashboardContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitchenDashboard;
