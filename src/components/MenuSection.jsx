import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/menu.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setMenuItems,
  setLoading,
  setError,
  selectAllMenuItems,
  selectMenuLoadingStatus,
  selectMenuError,
  setFilter,
  selectMenuFilter,
} from "../redux/menuSlice";
import { addToCart } from "../redux/cartSlice";

const MenuItem = ({ item, handleItemClick }) => {
  return (
    <div
      key={item.id}
      className={`col-sm-6 col-lg-4 all ${item.category}`}
      style={{ cursor: "pointer" }}
    >
      <div className="box">
        <div>
          <div className="img-box">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="detail-box">
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <div className="options">
              <h6>${item.price}</h6>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => handleItemClick(item)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterMenu = ({ filter, handleFilterClick }) => {
  const filters = [
    "All",
    "Popular",
    "Chefs",
    "Regular",
    "Veg",
    "Non-Veg",
    "Regional",
  ];

  return (
    <ul className="filters_menu">
      {filters.map((filterItem) => (
        <li
          key={filterItem}
          className={filter === filterItem ? "active" : ""}
          onClick={() => handleFilterClick(filterItem)}
        >
          {filterItem}
        </li>
      ))}
    </ul>
  );
};

const Menu = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector(selectAllMenuItems);
  const loading = useSelector(selectMenuLoadingStatus);
  const error = useSelector(selectMenuError);
  const filter = useSelector(selectMenuFilter);
  const navigate = useNavigate();
  const gridRef = useRef(null);

  const handleFilterClick = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const handleItemClick = (item) => {
    navigate(`/user/menu/${item.id}`);
  };

  const filteredMenuItems =
    filter === "All"
      ? [...menuItems]
      : menuItems.filter((item) => {
          if (filter === "Popular") {
            return item.kitchenRating >= 4.5;
          } else if (filter === "Chefs") {
            //To DO
            return true;
          } else if (filter === "Regular") {
            return item.isLocalSeller === true;
          } else if (filter === "Veg") {
            return item.category === "vegetarian";
          } else if (filter === "Non-Veg") {
            return item.category === "nonveg";
          } else if (filter === "Regional") {
            return item.category === "regional";
          }
          return true;
        });

  const topDishes = [...filteredMenuItems]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const topChefs = [
    ...new Set(filteredMenuItems.map((item) => item.kitchenName)),
  ].map((kitchenName) =>
    filteredMenuItems.find((item) => item.kitchenName === kitchenName)
  );

  const vegetarian = filteredMenuItems.filter(
    (item) => item.category === "vegetarian"
  );
  const nonveg = filteredMenuItems.filter((item) => item.category === "nonveg");
  const regional = filteredMenuItems.filter(
    (item) => item.category === "regional"
  );

  if (loading === "loading") {
    return <div>Loading menu items...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="food_section layout_padding">
      <div className="menu-header">
        <button
          className="view-cart-button"
          onClick={() => navigate("/user/cart")}
        >
          View Cart
        </button>
      </div>
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Menu</h2>
        </div>

        {/* Filter Menu */}
        <FilterMenu filter={filter} handleFilterClick={handleFilterClick} />

        {/* Top Dishes Section */}
        {topDishes.length > 0 && (
          <div className="menu-category">
            <h3 className="mt-5">Top Dishes</h3>
            <div className="row" ref={gridRef}>
              {topDishes.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  handleItemClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        )}

        {/* Top Chefs Section */}
        {filter !== "Chefs" && topChefs.length > 0 && (
          <div className="menu-category">
            <h3 className="mt-5">Top Chefs</h3>
            <div className="row" ref={gridRef}>
              {topChefs.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  handleItemClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        )}

        {/* Vegetarian Section */}
        {filter !== "Veg" && vegetarian.length > 0 && (
          <div className="menu-category">
            <h3 className="mt-5">Vegetarian</h3>
            <div className="row" ref={gridRef}>
              {vegetarian.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  handleItemClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        )}

        {/* Non-Veg Section */}
        {filter !== "Non-Veg" && nonveg.length > 0 && (
          <div className="menu-category">
            <h3 className="mt-5">Non-Veg</h3>
            <div className="row" ref={gridRef}>
              {nonveg.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  handleItemClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regional Section */}
        {filter !== "Regional" && regional.length > 0 && (
          <div className="menu-category">
            <h3 className="mt-5">Regional</h3>
            <div className="row" ref={gridRef}>
              {regional.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  handleItemClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
