import React from 'react';
import { Star } from 'lucide-react';

const HOTEL_REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b589?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 5,
    review: "Amazing experience! The booking process was seamless, and the hotel exceeded my expectations. The customer service was outstanding, and check-in was incredibly smooth.",
    location: "New York"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Family Vacation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 5,
    review: "Perfect for our family trip! Easy booking, great room options, and excellent amenities. The kids loved the pool, and we appreciated the family-friendly atmosphere.",
    location: "Orlando"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Weekend Getaway",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    rating: 5,
    review: "Best hotel booking platform I've used! Found the perfect romantic getaway with just a few clicks. The room was exactly as described, and the location was perfect.",
    location: "San Francisco"
  }
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center gap-1">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'fill-amber-400 text-amber-400' 
            : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="relative w-80 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    {/* Profile Image */}
    <div className="flex justify-center">
      <img
        className="h-20 w-20 rounded-full border-4 border-white shadow-lg -mt-10 object-cover"
        src={review.image}
        alt={`${review.name} profile`}
      />
    </div>
    
    {/* Content */}
    <div className="px-6 py-4 text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {review.name}
      </h3>
      <p className="text-sm text-blue-600 font-medium mb-2">
        {review.role}
      </p>
      <p className="text-xs text-gray-500 mb-4">
        📍 {review.location}
      </p>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4 px-2">
        "{review.review}"
      </p>
      
      <StarRating rating={review.rating} />
    </div>
  </div>
);

const SectionHeader = () => (
  <div className="text-center mb-16">
    <span className="inline-block bg-black/75 text-white/75 text-sm font-semibold px-4 py-2 rounded-full mb-4">
      Guest Reviews
    </span>
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      What Our Guests Say
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Don't just take our word for it. Here's what travelers from around the world 
      have to say about their booking experience with us.
    </p>
  </div>
);



const CustomerReview = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader />
        
        {/* Reviews Grid */}
        <div className="flex flex-wrap justify-center items-start gap-8 mt-20">
          {HOTEL_REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to create your own amazing experience?
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;