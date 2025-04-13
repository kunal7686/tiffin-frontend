import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider";
import Modal from "react-modal";
import "../assets/css/menu.css";

const Menu = () => {
  const [filter, setFilter] = useState("*");
  const [activeFilter, setActiveFilter] = useState("*");
  const [visibleItems, setVisibleItems] = useState(6); // Track visible items
  const gridRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  useEffect(() => {
    setActiveFilter(filter);
    setVisibleItems(6); // Reset visible items when filter changes
  }, [filter]);

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setItemQuantity(1);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddToCartFromModal = () => {
    if (selectedItem) {
      addToCart({ ...selectedItem, quantity: itemQuantity });
      closeModal();
      navigate("/user/cart");
    }
  };

  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const handleViewMore = () => {
    setVisibleItems(visibleItems + 6); // Show 6 more items
  };

  const menuItems = [
    {
      id: 1,
      name: "Classic Tiffin",
      description: "A balanced meal with roti, sabzi, dal, and rice.",
      price: 8,
      image: "/images/kitchen/boxes/first.jpg",
      category: "daily",
    },
    {
      id: 2,
      name: "Executive Lunch",
      description: "Premium meal with special sabzi, paneer dish, and dessert.",
      price: 12,
      image: "/images/kitchen/boxes/second.jpg",
      category: "daily",
    },
    {
      id: 3,
      name: "Customizable Tiffin",
      description: "Choose your favorite items from our menu each day.",
      price: 10,
      image: "/images/kitchen/boxes/third.jpg",
      category: "custom",
    },
    {
      id: 4,
      name: "Vegetarian Special",
      description: "A delicious and healthy vegetarian meal option.",
      price: 9,
      image: "/images/kitchen/boxes/four.jpg",
      category: "vegetarian",
    },
    {
      id: 5,
      name: "Non-Vegetarian Delight",
      description: "Enjoy our flavorful non-vegetarian dishes in a tiffin.",
      price: 11,
      image: "/images/kitchen/boxes/five.jpg",
      category: "nonveg",
    },
    {
      id: 6,
      name: "Weekend Special Tiffin",
      description: "Treat yourself with our special weekend menu.",
      price: 15,
      image: "/images/kitchen/boxes/six.jpg",
      category: "weekend",
    },
    {
      id: 7,
      name: "Subscription - Monthly",
      description: "Get delicious tiffins delivered every day for a month.",
      price: 200,
      image: "/images/kitchen/boxes/seven.jpg",
      category: "subscription",
    },
    {
      id: 8,
      name: "Subscription - Weekly",
      description: "Delicious tiffins delivered every day for a month.",
      price: 50,
      image: "/images/kitchen/boxes/eight.jpg",
      category: "subscription",
    },
    {
      id: 9,
      name: "Burger",
      description: "Delicious burger with cheese.",
      price: 7,
      image: "/images/kitchen/boxes/first.jpg",
      category: "burger",
    },
    {
      id: 10,
      name: "Pizza",
      description: "Delicious Pizza with cheese.",
      price: 7,
      image: "/images/kitchen/boxes/first.jpg",
      category: "pizza",
    },
     {
      id: 11,
      name: "Pasta",
      description: "Delicious Pasta with cheese.",
      price: 7,
      image: "/images/kitchen/boxes/first.jpg",
      category: "pasta",
    },
    {
      id: 12,
      name: "Fries",
      description: "Delicious Fries with cheese.",
      price: 7,
      image: "/images/kitchen/boxes/first.jpg",
      category: "fries",
    },
  ];

  const filteredMenuItems =
    filter === "*"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  const visibleMenuItems = filteredMenuItems.slice(0, visibleItems);

  // Modal Styles (You can customize these further)
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      maxWidth: '500px',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
  };

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

        <ul className="filters_menu">
          <li
            className={activeFilter === "*" ? "active" : ""}
            onClick={() => handleFilterClick("*")}
          >
            All
          </li>
          <li
            className={activeFilter === "burger" ? "active" : ""}
            onClick={() => handleFilterClick("burger")}
          >
            Burger
          </li>
          <li
            className={activeFilter === "pizza" ? "active" : ""}
            onClick={() => handleFilterClick("pizza")}
          >
            Pizza
          </li>
          <li
            className={activeFilter === "pasta" ? "active" : ""}
            onClick={() => handleFilterClick("pasta")}
          >
            Pasta
          </li>
          <li
            className={activeFilter === "fries" ? "active" : ""}
            onClick={() => handleFilterClick("fries")}
          >
            Fries
          </li>
        </ul>

        <div className="filters-content">
          <div className="row grid" ref={gridRef}>
            {visibleMenuItems.map((item) => (
              <div
                key={item.id}
                className={`col-sm-6 col-lg-4 all ${item.category}`}
                style={{ cursor: "pointer" }}
                onClick={() => handleItemClick(item)}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {filteredMenuItems.length > visibleItems && (
          <div className="btn-box">
            <button onClick={handleViewMore}>View More</button>
          </div>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Item Details"
      >
        {selectedItem && (
          <div className="modal-content">
            <h2>{selectedItem.name}</h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <p>{selectedItem.description}</p>
            <p>Price: ${selectedItem.price}</p>

            <div className="quantity-controls">
              <button onClick={decreaseQuantity} className="quantity-button">
                -
              </button>
              <span className="quantity-value">{itemQuantity}</span>
              <button onClick={increaseQuantity} className="quantity-button">
                +
              </button>
            </div>

            <div className="modal-actions">
              <button onClick={handleAddToCartFromModal} className="add-to-cart-btn">
                Add to Cart
              </button>
              <button onClick={closeModal} className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Menu;