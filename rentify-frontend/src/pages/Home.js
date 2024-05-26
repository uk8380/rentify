import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-19 text-gray-800">Welcome to Rentify</h1>
      <p className="text-lg text-gray-600 mb-8">Find your perfect rental property today!</p>
      
      <div className="flex justify-center items-center mb-8">
        
      </div>
      
      <p className="text-lg text-gray-700 mb-8">Discover a wide range of rental properties in your desired location. Whether you're looking for a cozy apartment in the heart of the city, a spacious house in the suburbs, or a charming cottage by the beach, Rentify has you covered.</p>
      
      <p className="text-lg text-gray-700 mb-8">With our user-friendly platform, you can easily search, compare, and filter properties based on your preferences. We provide detailed property listings with photos, descriptions, and amenities, ensuring you find the perfect home that meets your needs and lifestyle.</p>
      
      <Link to="/properties" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Explore Properties</Link>
      
      <p className="text-lg text-gray-700 mt-8">Ready to list your property for rent? It's easy and quick!</p>
      
      <Link to="/post-property" className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition duration-300 ease-in-out">List Your Property</Link>
    </div>
  );
};

export default Home;
