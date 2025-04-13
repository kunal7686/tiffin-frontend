import React, { useState } from "react";

function ManageChefs() {
  const [chefData, setChefData] = useState({
    chefId: "",
    name: "",
    email: "",
    specialty: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setChefData({ ...chefData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Chef Data:", chefData);
    // Add your logic here to submit the chef data to your backend
  };

  return (
    <div className="content-wrapper">
      <h2>Manage Chefs</h2>
      <p>Add, edit, and remove kitchen staff accounts.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="chefId">Chef ID:</label>
          <input
            type="text"
            id="chefId"
            name="chefId"
            className="form-control"
            value={chefData.chefId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={chefData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={chefData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="specialty">Specialty:</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            className="form-control"
            value={chefData.specialty}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label>
            Active:
            <input
              type="checkbox"
              name="isActive"
              checked={chefData.isActive}
              onChange={(e) =>
                setChefData({ ...chefData, isActive: e.target.checked })
              }
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-success"
          style={{ maxWidth: "500px" }}
        >
          Save Chef
        </button>
      </form>
    </div>
  );
}

export default ManageChefs;