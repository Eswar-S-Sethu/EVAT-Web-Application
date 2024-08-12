// src/components/VehiclePage.js
import React, { useState } from 'react';
import './VehiclePage.css';

const VehiclePage = () => {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState('');
    const [skipForNow, setSkipForNow] = useState(false);

    const vehicles = ["Audi e-tron", "Polestar", "Tesla Model 3", "Tesla Model S", "Tesla Model Y"]; // Example list

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

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleSkipChange = (e) => {
        setSkipForNow(e.target.checked);
    };

    const years = [2015,2016,2017,2018,2019,2020,2021,2023,2024]
    const chargingPortTypes = ["Type 1", "Type 2", "CHAdeMO", "CCS", "Tesla Supercharger"]; // Example options

    return (
        <div className="vehicle-page-container">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*Is_Ce9vcfmttPtr-z6nqUA.png" className="background-image" />
            <div className="content">
                <img src="add_vehicle/src/logo.jpeg" className="logo" />
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
                Not seeing your vehicle here? Click the link below
                </p>

                {/* New Additions */}
                <label>
                    Select Charging Port Type
                    <select>
                        {chargingPortTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Vehicle Date of Manufacture
                    <select value={selectedYear} onChange={handleYearChange}>
                        <option value="">Select Year</option>
                        {years.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Skip for Now
                    <input
                        type="checkbox"
                        checked={skipForNow}
                        onChange={handleSkipChange}
                    />
                </label>

                <button type="button" className='just-button'>Proceed</button>

                <label>Vehicles shown are based on: Australia</label>

                {/* Image link at the bottom left */}
                <div className="bottom-left">
                    <img src="https://www.iconpacks.net/icons/1/free-help-icon-1160-thumb.png" className="link-image" onClick={openModal}/>

                </div>

            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Vehicle Information</h2>
                        <p>Please fill out the details below.</p>
                        <form>
                            <label>
                                Preferred Contact Method  
                                <input type="text" placeholder='Phone/Email'/>
                            </label>
                            <label>
                                Vehicle Name/Type  
                                <input type="text" placeholder='Vehicle name/type'/>
                            </label>
                            <label>
                                Year of Manufacture  
                                <input type="text" placeholder='Year'/>
                            </label>
                            <p>Thank you for your patience! We will locate your car and add it to our system. Once that’s done, we’ll notify you. In the meantime, you can skip this page and proceed.</p>
                            <button type="button" onClick={closeModal}>Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VehiclePage;
