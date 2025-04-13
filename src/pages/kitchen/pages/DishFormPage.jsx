import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import DishForm from "./DishForm";
import { useDispatch } from "react-redux";
import { addMenuItem, updateMenuItem } from "../../../redux/menuSlice";

function DishFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dishId } = useParams();
  const location = useLocation();

  const formType = dishId ? (location.pathname.startsWith("/kitchen/dish/edit") ? "edit" : "copy") : "add";

  const initialDish = location.state?.dish || {
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
  };

  const dish = formType === "copy" ? { ...initialDish, id: null } : initialDish;

  const handleFormSubmit = (formData) => {
    if (formType === "add" || formType === "copy") {
      dispatch(addMenuItem({ ...formData, id: Date.now() }));
    } else if (formType === "edit") {
      dispatch(updateMenuItem(formData));
    }

    navigate("/kitchen/dashboard");
  };

  const handleCancel = () => {
    navigate("/kitchen/dashboard");
  };

  return (
    <div className="container">
      <h1>{formType === "add" ? "Add New Dish" : formType === "edit" ? "Edit Dish" : "Copy Dish"}</h1>
      <DishForm dish={dish} onSubmit={handleFormSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default DishFormPage;