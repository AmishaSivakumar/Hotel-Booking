import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HotelList from './Components/HotelList';
import BookingForm from './Components/BookingForm';
import Confirmation from './Components/Confirmation';
import HotelDetails from './Components/HotelDetails';

const hotelsData = [
  {
    id: 1,
    name: 'Hotel A',
    location: 'City A',
    price: 150,
    amenities: ['Pool', 'Spa', 'Fitness Center']
  },
  {
    id: 2,
    name: 'Hotel B',
    location: 'City B',
    price: 200,
    amenities: ['Pool', 'Restaurant', 'Bar']
  },
  {
    id: 3,
    name: 'Hotel C',
    location: 'City C',
    price: 100,
    amenities: ['Gym', 'Free Wi-Fi']
  },
  {
    id: 4,
    name: 'Hotel D',
    location: 'City D',
    price: 250,
    amenities: ['Pool', 'Restaurant', 'Bar']
  },
  {
    id: 5,
    name: 'Hotel E',
    location: 'City E',
    price: 300,
    amenities: ['Pool', 'Restaurant', 'Bar', 'Free wi-Fi']
  },
  {
    id: 6,
    name: 'Hotel D',
    location: 'City D',
    price: 210,
    amenities: ['Restaurant', 'Bar']
  },
  {
    id: 7,
    name: 'Hotel F',
    location: 'City F',
    price: 250,
    amenities: ['Pool', 'Restaurant' ]
  }
];

function App() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HotelList hotels={hotelsData} />} />
          <Route path="/hotel/:id" element={<HotelDetails hotels={hotelsData} />} />
          <Route path="/booking/:id" element={<BookingForm setSelectedHotel={setSelectedHotel} hotels={hotelsData}/>} />
          <Route path="/confirmation" element={<Confirmation  hotels={hotelsData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
