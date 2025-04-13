import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/cart.css";
import { useCart } from "../components/CartProvider"; // Import useCart

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Get cart data and functions


  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const incrementQuantity = (itemId) => {
    const item = cart.find(item => item.id === itemId);
    updateQuantity(itemId, item.quantity + 1);
  };

  const decrementQuantity = (itemId) => {
    const item = cart.find(item => item.id === itemId);
    if (item && item.quantity > 1) { // Prevent going below 1
        updateQuantity(itemId, item.quantity - 1);
    } else if (item && item.quantity === 1) {
      removeFromCart(itemId)
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 45; // Fixed shipping cost
  const total = subtotal + shipping;

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
                <Link to="/checkout" className="boxed-btn checkout-btn">
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;