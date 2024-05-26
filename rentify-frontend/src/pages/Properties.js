import React, { useState, useEffect } from 'react';
import { getProperties } from '../services/api';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await getProperties();
        setProperties(response);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch properties', error);
        setError('Failed to fetch properties');
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map(property => (
            <div key={property._id} className="border rounded p-4 shadow-md">
              <h2 className="text-xl font-semibold">{property.place}</h2>
              <p>Area: {property.area}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Bathrooms: {property.bathrooms}</p>
              <p>Nearby Hospitals: {property.nearbyHospitals}</p>
              <p>Nearby Colleges: {property.nearbyColleges}</p>
              <p>Price: ${property.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
