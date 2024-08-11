// src/components/VehiclePage.js
import React, { useState } from 'react';
import './VehiclePage.css';

const VehiclePage = () => {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const vehicles = ["Toyota Camry", "Honda Accord", "Tesla Model 3", "Ford Mustang", "BMW X5"]; // Example list

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        setSuggestions(vehicles.filter(vehicle => vehicle.toLowerCase().includes(value.toLowerCase())));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="vehicle-page-container">
            <img src="/path-to-your-background-image.jpg" alt="Background" className="background-image" />
            <div className="content">
                <img src="/path-to-your-logo.png" alt="Company Logo" className="logo" />
                <h1>Add Your Vehicle</h1>
                <p className="description">Please enter your vehicle information below.</p>
                <div className="search-field">
                    <input
                        type="text"
                        placeholder="Type your vehicle..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                    {suggestions.length > 0 && (
                        <ul className="suggestions">
                            {suggestions.map((suggestion, index) => (
                                <li key={index}>{suggestion}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <p className="small-description">
                    Need more information? <span className="link" onClick={openModal}>Click here</span>
                </p>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Additional Information</h2>
                        <p>Please fill out the details below.</p>
                        <form>
                            <label>
                                Field 1
                                <input type="text" />
                            </label>
                            <label>
                                Field 2
                                <input type="text" />
                            </label>
                            <label>
                                Field 3
                                <input type="text" />
                            </label>
                            <button type="button" onClick={closeModal}>Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VehiclePage;
