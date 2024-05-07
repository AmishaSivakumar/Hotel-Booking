import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Confirmation = () => {
    const { state } = useLocation();
    const { bookingDetails, selectedHotel } = state;

    if (!bookingDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h2 className="mt-4">Booking Confirmation</h2>
            <h2 className="mt-4">{selectedHotel.name}</h2>
            <p>Location: {selectedHotel.location}</p>
            <p>Price: ${selectedHotel.price} per night</p>
            <p>Amenities: {selectedHotel.amenities.join(', ')}</p>
            <p>Check-in Date: {bookingDetails.checkInDate}</p>
            <p>Check-out Date: {bookingDetails.checkOutDate}</p>
            <p>Number of Rooms: {bookingDetails.numRooms}</p>
            <p>Number of Guests: {bookingDetails.numGuests}</p>
        </div>
    );
};

export default Confirmation;
