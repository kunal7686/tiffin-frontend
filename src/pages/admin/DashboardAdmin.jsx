import React from "react";
import { Route, Routes } from "react-router-dom";

// Component imports (Corrected paths)
import Sidebar from "./componenets/Sidebar";
import Navbar from "./componenets/Navbar";
import DashboardContent from "./componenets/DashboardContent";
import Footer from "./componenets/Footer";
import ManageDishes from "./componenets/ManageDishes";
import ManageOrders from "./componenets/ManageOrders";
import ManageUsers from "./componenets/ManageUsers";
import ManageChefs from "./componenets/ManageChefs";

function AdminDashboard() {
  return (
    <div>
      <div className="container-scroller">
        <Sidebar />
        <div className="container-fluid page-body-wrapper">
          <Navbar />
          <div className="main-panel">
            <Routes>
              <Route path="/" element={<DashboardContent />} />  {/* Default dashboard content */}
              <Route path="manage-dishes" element={<ManageDishes />} />
              <Route path="manage-orders" element={<ManageOrders />} />
              <Route path="manage-users" element={<ManageUsers />} />
              <Route path="manage-chefs" element={<ManageChefs />} />
              {/* Add more routes for other sections */}
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;