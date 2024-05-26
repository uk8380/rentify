// import axios from 'axios';

// const API_URL = 'http://localhost:8800/api';

// export const registerUser = (data) => axios.post(`${API_URL}/users/register`, data);
// export const loginUser = (data) => axios.post(`${API_URL}/users/login`, data);
// export const getProperties = () => axios.get(`${API_URL}/properties`);
// export const postProperty = (data, token) => axios.post(`${API_URL}/properties`, data, {
//   headers: { Authorization: `Bearer ${token}` }
// });
// export const updateProperty = (id, data, token) => axios.put(`${API_URL}/properties/${id}`, data, {
//   headers: { Authorization: `Bearer ${token}` }
// });
// export const deleteProperty = (id, token) => axios.delete(`${API_URL}/properties/${id}`, {
//   headers: { Authorization: `Bearer ${token}` }
// });
// export const getSellerProperties = (token) => axios.get(`${API_URL}/properties/seller`, {
//   headers: { Authorization: `Bearer ${token}` }
// });
import axios from 'axios';

const API_URL = 'http://localhost:8800/api';

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
