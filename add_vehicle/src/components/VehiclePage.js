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
            <img src="https://i.ibb.co/yRY5hWd/addvehiclebg.jpg" className="background-image" />
            <div className="content">
                <img src="https://i.ibb.co/Q6dRkQN/companylogo.jpg" className="logo" />
                <h1>Add Your Electric Vehicle</h1>
                <p className="description">Your  vehicle is used to assess the compatibility of  charging stations.</p>
                <div className="search-field">
                    <input
                        type="text"
                        placeholder="Type your vehicle..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <input 
                    type="text"
                    placeholder="Vehicle type?"
                    />
                    {suggestions.length > 0 && (
                        <ul className="suggestions">
                            {suggestions.map((suggestion, index) => (
                                <li key={index}>{suggestion}</li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* New Additions */}
                <label>
                    Select Charging Port Type<br></br>
                    <select class="options-style">
                        {chargingPortTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Vehicle Date of Manufacture<br></br>
                    <input
                        type="date"
                        value={selectedYear}
                        onChange={handleYearChange}
                        className="options-style"
                    />
                </label>

                <label>
                    Skip for Now
                    <input
                        type="checkbox"
                        checked={skipForNow}
                        onChange={handleSkipChange}
                        className='green-checkbox'
                    />
                </label>

                <button type="button" className='just-button'>Proceed</button>

                <label>Vehicles shown are based on: <br></br>
                <img src={require('/home/eswar/Documents/Deakin_Chameleon_Project/EVAT-Web-Application/add_vehicle/src/Flag of australia.png')} alt="Australia Flag" style={{ width: '20px', height: 'auto', marginLeft: '5px' }} />
                Australia
                </label>


                {/* Image link at the bottom left */}
                <div className="bottom-left">
                    <p>Need Help?</p>
                    <img src="https://i.ibb.co/qB7vfb3/Needhelp.png" className="link-image" onClick={openModal}/>

                </div>

            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Vehicle Information</h2>
                        <p>Please fill out the details below.</p>
                        <form>
                            <label>
                                Preferred Contact Method  <br></br>
                                <input type="text" placeholder='Phone/Email'/>
                            </label>
                            <label>
                                Vehicle Name/Type  <br></br>
                                <input type="text" placeholder='Vehicle name/type'/>
                            </label>
                            <label>
                                Year of Manufacture  <br></br>
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
