import React, { useState } from "react";

function ManageUsers() {
  const [userData, setUserData] = useState({
    userId: "",
    username: "",
    email: "",
    role: "",
    isActive: true,
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", userData);
  };

  return (
    <div className="content-wrapper">
      <h2>Manage Users</h2>
      <p>Add, edit, and delete user accounts.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            name="userId"
            className="form-control"
            value={userData.userId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={userData.username}
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
            value={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            className="form-control"
            value={userData.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="kitchen">Kitchen</option>
          </select>
        </div>

        <div className="form-group" style={{ maxWidth: "500px" }}>
          <label>
            Active:
            <input
              type="checkbox"
              name="isActive"
              checked={userData.isActive}
              onChange={(e) =>
                setUserData({ ...userData, isActive: e.target.checked })
              }
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-info"
          style={{ maxWidth: "500px" }}
        >
          Save User
        </button>
      </form>
    </div>
  );
}

export default ManageUsers;
