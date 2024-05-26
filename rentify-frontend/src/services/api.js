
import axios from 'axios';

const API_URL = 'https://rentify-4phw.onrender.com/api';

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const getProperties = async () => {
  try {
    const response = await axios.get(`${API_URL}/properties`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const postProperty = async (data, token) => {
  try {
    const response = await axios.post(`${API_URL}/properties`, data, {
      headers: { 'x-auth-token': token }
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateProperty = async (id, data, token) => {
  try {
    const response = await axios.put(`${API_URL}/properties/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const deleteProperty = async (id, token) => {
  try {
    const response = await axios.delete(`${API_URL}/properties/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const likeProperty = async (id, token) => {
  try {
    const response = await axios.put(`${API_URL}/properties/like/${id}`, null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
