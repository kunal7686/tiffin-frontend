import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllMenuItems,
  selectMenuLoadingStatus,
  selectMenuError,
} from "../redux/menuSlice";
import { addToCart } from "../redux/cartSlice";

const MenuItemDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const menuItems = useSelector(selectAllMenuItems);
  const loading = useSelector(selectMenuLoadingStatus);
  const error = useSelector(selectMenuError);
  const navigate = useNavigate();
  const item = menuItems.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (!item && loading === "succeeded") {
      navigate("/user/menu");
    }
  }, [item, loading, navigate]);

  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart({ ...item, quantity: 1 }));
      navigate("/user/cart");
    }
  };

  if (loading === "loading") {
    return <div>Loading item details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!item) {
    return <div>Item not found. Redirecting...</div>;
  }

  return (
    <section className="food_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={item.image}
              alt={item.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-6">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Kitchen: {item.kitchenName}</p>
            <p>Ingredients: {item.ingredients.join(", ")}</p>
            <p>Spice Level: {item.spiceLevel}</p>
            <p>Delivery Time: {item.deliveryTime}</p>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className="cancel-button ms-2"
              onClick={() => navigate("/user/menu")}
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuItemDetails;
