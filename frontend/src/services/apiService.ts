// apiService.ts
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

// Récupère les données des sessions moyennes utilisateur
export const getUserAverageSessions = async (userId: number) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/average-sessions`);
    return response.data; // Retourne les sessions moyennes utilisateur
  } catch (error) {
    console.error('Erreur lors de la récupération des sessions moyennes :', error);
    throw error;
  }
};

// Récupère les données de performance utilisateur
export const getUserPerformance = async (userId: number) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}/performance`);
    return response.data; // Retourne la performance utilisateur
  } catch (error) {
    console.error('Erreur lors de la récupération des données de performance :', error);
    throw error;
  }
};

export const getUserScore = async (userId: number) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data.todayScore;  // Récupère le score du jour
  } catch (error) {
    console.error('Erreur lors de la récupération du score :', error);
    throw error;
  }
};

