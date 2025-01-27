import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Récupère les données utilisateur
export const getUser = async (userId: number) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data; // Retourne les données utilisateur
  } catch (error) {
    console.error('Erreur lors de la récupération des données utilisateur :', error);
    throw error;
  }
};

// Récupère les données d'activités utilisateur
export const getUserActivity = async (userId: number) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/activity`);
    return response.data; // Retourne les activités utilisateur
  } catch (error) {
    console.error('Erreur lors de la récupération des données d’activité :', error);
    throw error;
  }
};
