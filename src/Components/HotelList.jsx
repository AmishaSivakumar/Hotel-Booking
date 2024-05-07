import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HotelList = ({ hotels }) => {
    const [locationFilter, setLocationFilter] = useState('');
    const [priceRangeFilter, setPriceRangeFilter] = useState([0, Infinity]);


    const filteredHotels = hotels.filter(hotel => {
        const locationMatch = hotel.location.toLowerCase().includes(locationFilter.toLowerCase());
        const priceMatch = hotel.price >= priceRangeFilter[0] && hotel.price <= priceRangeFilter[1];

        return locationMatch && priceMatch;
    });

    const handleLocation = (e) => {
        setLocationFilter(e.target.value);
    };

    const handlePriceRange = (e) => {
        const minPrice = parseInt(e.target.value.split(',')[0]);
        const maxPrice = parseInt(e.target.value.split(',')[1]);
        setPriceRangeFilter([minPrice, maxPrice]);
    };


    return (
        <div className="container">
            <h2>Filter Hotels</h2>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={locationFilter}
                    onChange={handleLocation}
                />
            </div>
            <div className="form-group">
                <label htmlFor="priceRange">Price Range:</label>
                <select
                    className="form-control"
                    id="priceRange"
                    onChange={handlePriceRange}
                >
                    <option value="0,Infinity">Any</option>
                    <option value="0,100">$0 - $100</option>
                    <option value="100,200">$100 - $200</option>
                    <option value="200,300">$200 - $300</option>
                    <option value="300,Infinity">$300+</option>
                </select>
            </div> <br />
            <h2>Available Hotels</h2>
            <ul className="list-group">
                {filteredHotels.map((hotel) => (
                    <li key={hotel.id} className="list-group-item">
                        <Link to={`/hotel/${hotel.id}`}>
                            {hotel.name} - {hotel.location} - ${hotel.price} per night
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default HotelList;
