import React, { useState } from "react";

function ManageOrders() {
  const [orderData, setOrderData] = useState({
    orderId: "",
    userId: "",
    orderDate: "",
    totalAmount: "",
    status: "",
  });

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Data:", orderData);
    // Add your logic here to submit the order data to your backend
  };

  return (
    <div className="content-wrapper">
      <h2>Manage Orders</h2>
      <p>View, track, and process customer orders.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            className="form-control"
            value={orderData.orderId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            name="userId"
            className="form-control"
            value={orderData.userId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="orderDate">Order Date:</label>
          <input
            type="date"
            id="orderDate"
            name="orderDate"
            className="form-control"
            value={orderData.orderDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="totalAmount">Total Amount:</label>
          <input
            type="number"
            id="totalAmount"
            name="totalAmount"
            className="form-control"
            value={orderData.totalAmount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            className="form-control"
            value={orderData.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-warning"
          style={{ maxWidth: "500px" }}
        >
          Update Order
        </button>
      </form>
    </div>
  );
}

export default ManageOrders;