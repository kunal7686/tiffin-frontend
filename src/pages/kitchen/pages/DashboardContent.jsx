import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
  selectAllMenuItems,
  selectMenuLoadingStatus,
  selectMenuError,
  setLoading,
  setError,
  selectSearchTerm,
} from "../../../redux/menuSlice";
import "../../../assets/css/kitchen/DashboardContent.css";
import { Link } from "react-router-dom";

function DashboardContent() {
  const dispatch = useDispatch();
  const menuItems = useSelector(selectAllMenuItems);
  const loading = useSelector(selectMenuLoadingStatus);
  const error = useSelector(selectMenuError);
  const searchTerm = useSelector(selectSearchTerm);

  const handleDelete = (dishId) => {
    dispatch(deleteMenuItem(dishId));
  };

  const filteredMenuItems = menuItems.filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading === "loading") {
    return <div>Loading menu items...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="content-wrapper">
      <Link to="/kitchen/dish/add" className="btn btn-primary mb-3 ">
        Add New Dish
      </Link>
      <div className="row">
        {filteredMenuItems.length > 0 ? (
          filteredMenuItems.map((dish) => (
            <div
              key={dish.id}
              className="col-xl-3 col-sm-6 grid-margin stretch-card"
            >
              <div className="card">
                <div className="card-body">
                  <div className="dish-actions">
                    <Link
                      to={`/kitchen/dish/edit/${dish.id}`}
                      state={{ dish: dish, formType: "edit" }}
                      className="btn btn-sm btn-secondary"
                      title="Edit"
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                    <Link
                      to={`/kitchen/dish/copy/${dish.id}`}
                      state={{ dish: dish, formType: "copy" }}
                      className="btn btn-sm btn-info"
                      title="Copy"
                    >
                      <i className="fas fa-copy"></i>
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      title="Delete"
                      onClick={() => handleDelete(dish.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="dish-image"
                  />
                  <h4 className="card-title">{dish.name}</h4>
                  <p className="card-description">{dish.description}</p>
                  <p>Price: ${dish.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>Search not found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardContent;
