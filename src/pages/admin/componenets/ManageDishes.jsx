import React, { useState } from "react";

function ManageDishes() {
  const [dishData, setDishData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setDishData({ ...dishData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dish Data:", dishData);
    // Add your logic here to submit the dish data to your backend
  };

  return (
    <div className="content-wrapper">
      <h2>Manage Dishes</h2>
      <p>Add, edit, and delete dishes from your menu.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ maxWidth: "500px" }}>
          {/* Limit the width of the form group */}
          <label htmlFor="name">Dish Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={dishData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={dishData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
            value={dishData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={dishData.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="form-control"
            value={dishData.imageUrl}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ maxWidth: "500px" }}>
          Save Dish
        </button>
      </form>
    </div>
  );
}

export default ManageDishes;