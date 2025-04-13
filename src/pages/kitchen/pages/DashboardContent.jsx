// DashboardContent.js
import React, { useState, useEffect } from "react";
import dishesData from "../../../assets/data/kitchen/dishes.json";
import "../../../assets/css/kitchen/DashboardContent.css";
import DishForm from "./DishForm"; // Import the DishForm component

function DashboardContent() {
    const [dishes, setDishes] = useState(dishesData);
    const [selectedDish, setSelectedDish] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState("edit"); // "edit", "copy", "add"

    const handleAddNewDish = () => {
        setSelectedDish({
            name: "",
            description: "",
            price: "",
            image: "",
            category: ""
        }); // Initialize an empty dish object
        setFormType("add");
        setShowModal(true);
    };

    const handleEdit = (dish) => {
        setSelectedDish(dish);
        setFormType("edit");
        setShowModal(true);
    };

    const handleCopy = (dish) => {
        setSelectedDish({ ...dish, id: null }); // Create a new dish with a new ID
        setFormType("copy");
        setShowModal(true);
    };

    const handleDelete = (dishId) => {
        const updatedDishes = dishes.filter(dish => dish.id !== dishId);
        setDishes(updatedDishes);
    };

    const handleFormSubmit = (formData) => {
        if (formType === "edit") {
            // Update existing dish
            const updatedDishes = dishes.map(dish =>
                dish.id === formData.id ? formData : dish
            );
            setDishes(updatedDishes);
        } else if (formType === "copy") {
            // Create a new dish with new ID (simulate)
            const newDish = { ...formData, id: Date.now() }; // Use timestamp for ID
            setDishes([...dishes, newDish]);
        } else if (formType === "add") {
            // Create a new dish with a temporary ID
            const newDish = { ...formData, id: Date.now() }; // Use timestamp for ID
            setDishes([...dishes, newDish]);
        }

        setShowModal(false);
        setSelectedDish(null);
    };

    const handleCancel = () => {
        setShowModal(false);
        setSelectedDish(null);
        setFormType("edit"); // Reset form type on cancel
    };

    return (
        <div className="content-wrapper">
            <button className="btn btn-primary mb-3" onClick={handleAddNewDish}>
                Add New Dish
            </button>
            <div className="row">
                {dishes.map(dish => (
                    <div key={dish.id} className="col-xl-3 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="dish-actions">
                                    <button className="btn btn-sm btn-secondary" title="Edit" onClick={() => handleEdit(dish)}>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className="btn btn-sm btn-info" title="Copy" onClick={() => handleCopy(dish)}>
                                        <i className="fas fa-copy"></i>
                                    </button>
                                    <button className="btn btn-sm btn-danger" title="Delete" onClick={() => handleDelete(dish.id)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                                <img src={dish.image} alt={dish.name} className="dish-image" />
                                <h4 className="card-title">{dish.name}</h4>
                                <p className="card-description">{dish.description}</p>
                                <p>Price: ${dish.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCancel}>×</span>
                        <DishForm dish={selectedDish} onSubmit={handleFormSubmit} onCancel={handleCancel} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DashboardContent;