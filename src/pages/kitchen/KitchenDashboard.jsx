// KitchenDashboard.js
import React from "react";
import { Route, Routes } from "react-router-dom";

// Component imports
import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import DashboardContent from "./pages/DashboardContent";
import Footer from "./pages/Footer";

function KitchenDashboard() {
  return (
    <div>
      <div className="container-scroller">
        <Sidebar />
        <div className="container-fluid page-body-wrapper">
          <Navbar />
          <div className="main-panel">
            <Routes>
              <Route path="/" element={<DashboardContent />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitchenDashboard;
