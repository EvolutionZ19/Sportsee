import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUser = async (userId: number) => {
  const response = await axios.get(`${API_URL}/user/${userId}`);
  return response.data;
};

export const getUserActivity = async (userId: number) => {
  const response = await axios.get(`${API_URL}/user/${userId}/activity`);
  return response.data;
};
