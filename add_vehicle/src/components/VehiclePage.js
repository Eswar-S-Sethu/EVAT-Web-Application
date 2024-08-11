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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-i_PAySQIKQLQgVrcEnDEs4yQkAhUs4c1w&s" alt="Background" className="background-image" />
            <img src="https://www.eu-startups.com/wp-content/uploads/2020/08/logo_evway-500x500.png" alt="Company Logo" className="logo" />
            <div className="content">
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


document.addEventListener('DOMContentLoaded', function() {
    // Create the container div
    const containerDiv = document.createElement('div');
    containerDiv.className = 'option.container';

    // Add the HTML structure to the container
    containerDiv.innerHTML = `
        <div class="input-field">
            <label for="port-type">Select charging port type</label>
            <select id="port-type">
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="chademo">CHAdeMO</option>
                <option value="other">Other</option>
            </select>
        </div>

        <div class="input-field">
            <label for="manufacture-year">Vehicle's year of manufacture</label>
            <input type="text" id="manufacture-year" value="2024">
        </div>

        <div class="checkbox-field">
            <input type="checkbox" id="skip">
            <label for="skip">Skip for now</label>
        </div>

        <button class="proceed-btn">Proceed</button>
        <br><br><br><br>
        
        <div class="chat-box">
            <img src="chatbox.png" alt="Chat Icon">
            <span>Need help?</span>
        </div>
        
        <div class="country-selection">
            Vehicles shown are based on: 
            <img src="australia_flag.png" alt="Australia Flag">
            <select>
                <option value="australia">Australia</option>
                <!-- Add other countries here -->
            </select>
        </div>
    `;

    // Find the element in your existing HTML where you want to insert this form
    const appDiv = document.getElementById('app');

    // Insert the container into the selected element
    appDiv.appendChild(containerDiv);
});
export default VehiclePage;
