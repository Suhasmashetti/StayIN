// FeaturedDestination.jsx
import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'


const FeaturedDestination = () => {
    return (
      <div className="px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 relative inline-block">
            Featured Destinations
            <span className="block w-20 h-1 bg-gradient-to-r from-black-500 to-gray-500 mt-2 mx-auto rounded-full"></span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Explore handpicked stays perfect for your next trip
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 py-1">
          {roomsDummyData.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>
      </div>
    )
  }
  
  export default FeaturedDestination
