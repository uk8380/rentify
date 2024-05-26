import React, { useState } from 'react';
import { postProperty } from '../services/api';

const PostProperty = () => {
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearbyHospitals: '',
    nearbyColleges: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await postProperty({
        ...formData,
        price: parseFloat(formData.price), // Ensure price is converted to a number
      }, token);
      alert('Property posted successfully');
      // Clear the form fields after successful submission
      setFormData({
        place: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        nearbyHospitals: '',
        nearbyColleges: '',
        price: '',
      });
    } catch (error) {
      console.error('Failed to post property', error);
      alert('Failed to post property');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Post Property</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="place" className="block mb-2">Place:</label>
          <input type="text" id="place" name="place" placeholder="Place" value={formData.place} onChange={handleChange} required className="w-full p-2 mb-4 border rounded" />

          <label htmlFor="area" className="block mb-2">Area:</label>
          <input type="text" id="area" name="area" placeholder="Area" value={formData.area} onChange={handleChange} required className="w-full p-2 mb-4 border rounded" />

          <label htmlFor="bedrooms" className="block mb-2">Bedrooms:</label>
          <input type="number" id="bedrooms" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} required className="w-full p-2 mb-4 border rounded" />

          <label htmlFor="bathrooms" className="block mb-2">Bathrooms:</label>
          <input type="number" id="bathrooms" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} required className="w-full p-2 mb-4 border rounded" />

          <label htmlFor="nearbyHospitals" className="block mb-2">Nearby Hospitals:</label>
          <input type="text" id="nearbyHospitals" name="nearbyHospitals" placeholder="Nearby Hospitals" value={formData.nearbyHospitals} onChange={handleChange} required className="w-full p-2 mb-4 border rounded" />

          <label htmlFor="nearbyColleges" className="block mb-2">Nearby Colleges:</label>
          <input type="text" id="nearbyColleges" name="nearbyColleges" placeholder="Nearby Colleges" value={formData.nearbyColleges} onChange={handleChange} required className="w-full p-2 mb-4 border rounded" />

          <label htmlFor="price" className="block mb-2">Price:</label>
          <input type="number" id="price" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required className="w-full p-2 mb-4 border rounded" />

          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Post Property</button>
        </form>
      </div>
    </div>
  );
};

export default PostProperty;
