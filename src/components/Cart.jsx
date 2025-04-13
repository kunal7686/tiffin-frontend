import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  selectCartItems,
  clearCart,
} from "../redux/cartSlice";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const navigate = useNavigate();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(null);
  const [checkoutError, setCheckoutError] = useState(null);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, quantity: newQuantity }));
  };

  const incrementQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    dispatch(updateQuantity({ itemId, quantity: item.quantity + 1 }));
  };

  const decrementQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ itemId, quantity: item.quantity - 1 }));
    } else if (item && item.quantity === 1) {
      dispatch(removeFromCart(itemId));
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 45;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    setCheckoutError(null);

    const orderData = {
      items: cart.map((item) => ({
        itemId: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      subtotal: subtotal,
      shipping: shipping,
      total: total,
      paymentMethod: "cashOnDelivery",
    };

    try {
      //const response = await axios.post("/api/orders", orderData);

      const response = {
        data: {
          orderId: Math.floor(Math.random() * 1000000), //Mock
          message: "Order placed successfully",
        },
        status: 201,
      };

      if (response.status === 201) {
        setOrderConfirmation({
          orderId: response.data.orderId,
          totalAmount: total.toFixed(2),
        });
        dispatch(clearCart());
      } else {
        setCheckoutError("An unexpected error occurred. Please try again.");
        console.error("Checkout failed:", response);
      }
    } catch (error) {
      setCheckoutError(
        "Could not connect to the server. Please check your internet connection and try again."
      );
      console.error("Error placing order:", error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (orderConfirmation) {
    return (
      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="alert alert-success" role="alert">
                <h4>Thank you for your order!</h4>
                <p>
                  Your order has been placed successfully. Please pay $
                  {orderConfirmation.totalAmount} upon delivery.
                </p>
                <p>Order ID: {orderConfirmation.orderId}</p>
                <button
                  onClick={() => {
                    setOrderConfirmation(null);
                    navigate("/user/menu");
                  }}
                  className="boxed-btn"
                >
                  Back to Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="cart-table-wrap">
              <table className="cart-table">
                <thead className="cart-table-head">
                  <tr className="table-head-row">
                    <th className="product-remove"></th>
                    <th className="product-image">Product Image</th>
                    <th className="product-name">Name</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr className="table-body-row" key={item.id}>
                      <td className="product-remove">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="remove-item-btn"
                        >
                          <i className="far fa-window-close"></i>
                        </button>
                      </td>
                      <td className="product-image">
                        <img src={item.image} alt={item.name} />
                      </td>
                      <td className="product-name">{item.name}</td>
                      <td className="product-price">${item.price}</td>
                      <td className="product-quantity">
                        <div className="quantity-selector">
                          <button
                            className="quantity-btn quantity-down"
                            onClick={() => decrementQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className="quantity-value">
                            {item.quantity}
                          </span>
                          <button
                            className="quantity-btn quantity-up"
                            onClick={() => incrementQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="product-total">
                        ${item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="total-section">
              <table className="total-table">
                <thead className="total-table-head">
                  <tr className="table-total-row">
                    <th>Total</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="total-data">
                    <td>
                      <strong>Subtotal: </strong>
                    </td>
                    <td>${subtotal.toFixed(2)}</td>
                  </tr>
                  <tr className="total-data">
                    <td>
                      <strong>Shipping: </strong>
                    </td>
                    <td>${shipping.toFixed(2)}</td>
                  </tr>
                  <tr className="total-data">
                    <td>
                      <strong>Total: </strong>
                    </td>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <div className="cart-buttons">
                {checkoutError && (
                  <div className="alert alert-danger" role="alert">
                    {checkoutError}
                  </div>
                )}

                {isCheckingOut ? (
                  <div>Processing Order...</div>
                ) : (
                  <button
                    onClick={handleCheckout}
                    className="boxed-btn checkout-btn"
                  >
                    Checkout - Cash on Delivery
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
