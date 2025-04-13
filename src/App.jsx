import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import AdminLayout from "./layouts/AdminLayout";
import KitchenLayout from "./layouts/KitchenLayout";
import UserLayout from "./layouts/UserLayout";
import AdminDashboard from "./pages/admin/DashboardAdmin";
import KitchenDashboard from "./pages/kitchen/KitchenDashboard";
import KitchenLogin from "./pages/kitchen/pages/Login";
import KitchenRegister from "./pages/kitchen/pages/Register";
import UserProfile from "./pages/user/UserDashboard";
import Home from "./pages/user/public/Home";
import About from "../src/components/AboutSection";
import ContactUs from "../src/components/FooterSection";
import Header from "../src/components/Header";
import Menu from "../src/components/MenuSection";
import Cart from "../src/components/Cart";
import CartProvider from "./components/CartProvider";

const App = () => {
  const location = useLocation();

  const hideHeaderOn = ["/login", "/kitchen/login", "/kitchen/register", "/admin", "/kitchen","/admin/dashboard"];

  const shouldShowHeader = !hideHeaderOn.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Auth />} />

        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard/*" element={<AdminDashboard />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        <Route path="/kitchen/*" element={<KitchenLayout />}>
          <Route path="login" element={<KitchenLogin />} />
          <Route path="register" element={<KitchenRegister />} />
          <Route path="dashboard" element={<KitchenDashboard />} />
          <Route index element={<Navigate to="login" replace />} />
        </Route>

        <Route path="/user/*" element={<UserLayout />}>
          <Route
            path="menu"
            element={
              <CartProvider>
                <Menu />
              </CartProvider>
            }
          />
          <Route
            path="profile"
            element={<UserProfile />}
          />
          <Route
            path="cart"
            element={
              <CartProvider>
                <Cart />
              </CartProvider>
            }
          />
          <Route index element={<Navigate to="menu" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;