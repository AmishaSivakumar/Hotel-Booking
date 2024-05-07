import React from 'react';
import { Link, useParams } from 'react-router-dom';

const HotelDetails = ({ hotels }) => {
    const { id } = useParams();
    const hotelId = parseInt(id);
    const selectedHotel = hotels.find(hotel => hotel.id === hotelId);

    if (!selectedHotel) {
        return <div>Hotel not found</div>;
    }

    return (
        <div className="container">
            <h2 className="mt-4">{selectedHotel.name}</h2>
            <p>Location: {selectedHotel.location}</p>
            <p>Price: ${selectedHotel.price} per night</p>
            <p>Amenities: {selectedHotel.amenities.join(', ')}</p>
            <Link to={`/booking/${selectedHotel.id}`} className="btn btn-primary">Book Now</Link>
        </div>
    );
};

export default HotelDetails;
