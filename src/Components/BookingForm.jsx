import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = ({ hotels, setSelectedHotel }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const hotelId = parseInt(id);
    const selectedHotel = hotels.find(hotel => hotel.id === hotelId);

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numRooms, setNumRooms] = useState('1');
    const [numGuests, setNumGuests] = useState('1');

    const handleSubmit = (e) => {
        e.preventDefault();
        const bookingDetails = {
            hotelId,
            checkInDate,
            checkOutDate,
            numRooms,
            numGuests
        };
        setSelectedHotel(hotelId);
        navigate('/confirmation',{ state: { bookingDetails, selectedHotel } });
    };

    return (
        <div className="container m-auto">
            <h2 className="mt-4">Book Your Stay at {selectedHotel.name}</h2>
            <form onSubmit={handleSubmit} style={{width: "50%"}}>
                <div className="form-group">
                    <label htmlFor="checkInDate">Check-in Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="checkInDate"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="checkOutDate">Check-out Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="checkOutDate"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numRooms">Number of Rooms:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="numRooms"
                        value={numRooms}
                        onChange={(e) => setNumRooms(e.target.value)}
                        min="1"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numGuests">Number of Guests:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="numGuests"
                        value={numGuests}
                        onChange={(e) => setNumGuests(e.target.value)}
                        min="1"
                    />
                </div> <br />
                <button type="submit" className="btn btn-primary">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookingForm;
