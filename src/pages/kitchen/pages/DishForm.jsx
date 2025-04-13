// DishForm.js
import React, { useState, useEffect } from "react";

function DishForm({ dish, onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category: ""
    });

    useEffect(() => {
        if (dish) {
            setFormData(dish);
        }
    }, [dish]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="card">
            <div className="card-body" style={{overflowY:"scroll"}}>
                <h4 className="card-title">Dish Form</h4>
                <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Dish Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Dish Description"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Dish Price"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Image URL"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            className="form-control"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="daily">Daily</option>
                            <option value="custom">Custom</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="nonveg">Non-Veg</option>
                            <option value="weekend">Weekend</option>
                            <option value="subscription">Subscription</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">
                        Submit
                    </button>
                    <button className="btn btn-dark" onClick={onCancel}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DishForm;