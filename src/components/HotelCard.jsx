import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  // Guard against undefined room or hotel
  if (!room || !room.hotel) return null;

  return (
    <div className='hover:scale-99 duration-300 hover:shadow-lg rounded-xl bg-white/85'>
    <Link to={`/rooms/${room._id}`} onClick={() => scrollTo(0, 0)} className="">
      <div className="relative">
        <img
          src={room.images[0]}
          alt="room"
          className="w-full h-64 object-cover rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
        />
        {index % 2 === 0 && (
          <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-4 pt-5">
        <div className="flex items-center justify-between mb-2">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star icon" className="w-5 h-5" /> 4.5
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <img src={assets.locationIcon} alt="location icon" className="w-4 h-4 mr-1" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <p>
            <span className="text-xl text-gray-800">${room.pricePerNight}</span> /night
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default HotelCard;
