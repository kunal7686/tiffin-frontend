import React, { useEffect } from "react";
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
import About from "./components/AboutSection";
import ContactUs from "./components/FooterSection";
import Header from "./components/Header";
import Menu from "./components/MenuSection";
import Cart from "./components/Cart";
import CartProvider from "./components/CartProvider";
import MenuItemDetails from "./components/MenuItemDetails";
import DishFormPage from "./pages/kitchen/pages/DishFormPage";
import { useDispatch } from "react-redux";
import { setMenuItems, setLoading, setError } from "./redux/menuSlice";
import ManageDishes from "./pages/admin/componenets/ManageDishes";
import ManageOrders from "./pages/admin/componenets/ManageOrders";
import ManageUsers from "./pages/admin/componenets/ManageUsers";
import ManageChefs from "./pages/admin/componenets/ManageChefs";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const hideHeaderOn = [
    "/login",
    "/kitchen/login",
    "/kitchen/register",
    "/admin",
    "/kitchen",
    "/admin/dashboard",
  ];

  const shouldShowHeader = !hideHeaderOn.some((path) =>
    location.pathname.startsWith(path)
  );

  useEffect(() => {
    const fetchMenuData = async () => {
      dispatch(setLoading("loading"));

      try {
        const response = {
          data: [
            {
              id: 1,
              name: "Classic Vegetarian Tiffin",
              description:
                "A wholesome vegetarian meal with roti, seasonal sabzi, dal, rice, and a sweet.",
              price: 8.5,
              image: "/images/kitchen/boxes/first.jpg",
              category: "vegetarian",
              rating: 4.6,
              kitchenName: "Annapurna Kitchen",
              kitchenRating: 4.7,
              isLocalSeller: true,
              mealType: "lunch",
              ingredients: [
                "whole wheat roti",
                "mixed vegetables",
                "yellow dal",
                "basmati rice",
                "gulab jamun",
              ],
              spiceLevel: "mild",
              deliveryTime: "12:00 PM - 1:00 PM",
              availableDays: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              isSubscriptionAvailable: true,
            },
            {
              id: 2,
              name: "Executive Non-Veg Tiffin",
              description:
                "A premium non-vegetarian meal with butter chicken, dal makhani, jeera rice, naan, and raita.",
              price: 12.0,
              image: "/images/kitchen/boxes/second.jpg",
              category: "nonveg",
              rating: 4.8,
              kitchenName: "Khan's Kitchen",
              kitchenRating: 4.9,
              isLocalSeller: false,
              mealType: "dinner",
              ingredients: [
                "butter chicken",
                "dal makhani",
                "jeera rice",
                "naan",
                "raita",
              ],
              spiceLevel: "medium",
              deliveryTime: "7:00 PM - 8:00 PM",
              availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
              isSubscriptionAvailable: true,
            },
            {
              id: 3,
              name: "South Indian Tiffin",
              description:
                "A flavorful South Indian meal with sambar, rasam, rice, two vegetable curries, and curd.",
              price: 9.0,
              image: "/images/kitchen/boxes/five.jpg",
              category: "regional",
              rating: 4.5,
              kitchenName: "Dakshin Delight",
              kitchenRating: 4.6,
              isLocalSeller: true,
              mealType: "lunch",
              ingredients: [
                "sambar",
                "rasam",
                "rice",
                "vegetable curries",
                "curd",
              ],
              spiceLevel: "medium",
              deliveryTime: "12:30 PM - 1:30 PM",
              availableDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
              isSubscriptionAvailable: false,
            },
            {
              id: 4,
              name: "Gujarati Tiffin",
              description:
                "A Theplaa meal with Batata nu shaak, dal, rice and khaman",
              price: 9.0,
              image: "/images/kitchen/boxes/four.jpg",
              category: "regional",
              rating: 4.5,
              kitchenName: "Radha's Rasoi",
              kitchenRating: 4.6,
              isLocalSeller: true,
              mealType: "lunch",
              ingredients: [
                "Thepla",
                "Batata nu shaak",
                "Dal",
                "Rice",
                "Khaman",
              ],
              spiceLevel: "medium",
              deliveryTime: "12:30 PM - 1:30 PM",
              availableDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
              isSubscriptionAvailable: false,
            },

            {
              id: 5,
              name: "Maharashtrian Tiffin",
              description:
                "A Puran Poli meal with Batata nu shaak, dal, rice and kothimbir vadi",
              price: 9.0,
              image: "/images/kitchen/boxes/third.jpg",
              category: "regional",
              rating: 4.7,
              kitchenName: "Sai Prasad",
              kitchenRating: 4.8,
              isLocalSeller: true,
              mealType: "lunch",
              ingredients: [
                "Puran Poli",
                "Batata nu shaak",
                "Dal",
                "Rice",
                "kothimbir vadi",
              ],
              spiceLevel: "medium",
              deliveryTime: "12:30 PM - 1:30 PM",
              availableDays: ["Tuesday", "Thursday", "Saturday", "Sunday"],
              isSubscriptionAvailable: false,
            },
          ],
        };

        dispatch(setMenuItems(response.data));
        dispatch(setLoading("succeeded"));
      } catch (err) {
        console.error("Error fetching menu data:", err);
        dispatch(setError(err.message));
        dispatch(setLoading("failed"));
      }
    };

    fetchMenuData();
  }, [dispatch]);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Auth />} />

        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          {/* Admin Routes from AdminDashboard.jsx */}
          <Route path="manage-dishes" element={<ManageDishes />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-chefs" element={<ManageChefs />} />

          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        <Route path="/kitchen/*" element={<KitchenLayout />}>
          <Route path="login" element={<KitchenLogin />} />
          <Route path="register" element={<KitchenRegister />} />
          <Route path="dashboard" element={<KitchenDashboard />} />
          <Route path="dish/add" element={<DishFormPage />} />
          <Route path="dish/edit/:dishId" element={<DishFormPage />} />
          <Route path="dish/copy/:dishId" element={<DishFormPage />} />
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
          <Route path="profile" element={<UserProfile />} />
          <Route
            path="cart"
            element={
              <CartProvider>
                <Cart />
              </CartProvider>
            }
          />
          <Route path="menu/:id" element={<MenuItemDetails />} />
          <Route index element={<Navigate to="menu" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
