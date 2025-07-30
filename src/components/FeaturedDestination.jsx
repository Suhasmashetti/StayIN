import React from 'react';
import { Link } from 'react-router-dom';

const assets = {
  starIconFilled: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  locationIcon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
};

const FEATURED_ROOMS = [
  {
    _id: 1,
    hotel: {
      name: "Luxury Ocean View Suite",
      address: "Malibu, California"
    },
    pricePerNight: 299,
    images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=500&h=300&auto=format&fit=crop"]
  },
  {
    _id: 2,
    hotel: {
      name: "Mountain Retreat Cabin",
      address: "Aspen, Colorado"
    },
    pricePerNight: 199,
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=500&h=300&auto=format&fit=crop"]
  },
  {
    _id: 3,
    hotel: {
      name: "Urban Penthouse Loft",
      address: "New York, NY"
    },
    pricePerNight: 399,
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500&h=300&auto=format&fit=crop"]
  },
  {
    _id: 4,
    hotel: {
      name: "Tropical Beach Villa",
      address: "Bali, Indonesia"
    },
    pricePerNight: 179,
    images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=500&h=300&auto=format&fit=crop"]
  }
];

const HotelCard = ({ room, index }) => {
  // Guard against undefined room or hotel
  if (!room || !room.hotel) return null;

  return (
    <Link to={`/rooms/${room._id}`} onClick={() => window.scrollTo(0, 0)} className="">
      <div className="relative hover:-translate-y-0.5 duration-300">
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
  );
};

const FeaturedDestination = ({ roomsDummyData = FEATURED_ROOMS }) => {
  const featuredRooms = roomsDummyData?.slice(0, 4) || FEATURED_ROOMS;

  return (
    <div className="px-8 py-8 mt-2">
      <div className="text-center mb-8 pt-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800/75 relative inline-block">
          Featured Destinations
          <span className="block w-20 h-1 bg-gradient-to-r from-gray-800 to-gray-500 mt-2 mx-auto rounded-full"></span>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-500">
          Explore handpicked stays perfect for your next trip
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-1">
        {featuredRooms.map((room, index) => (
          <HotelCard key={room?._id || index} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;