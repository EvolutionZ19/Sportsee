import React, { useState, useEffect } from 'react';
import { getUser } from '../services/apiService';

// Définir le type des données statistiques
interface UserStatsData {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
}

interface UserStatsProps {
  userId: number;
}

const UserStats: React.FC<UserStatsProps> = ({ userId }) => {
  const [stats, setStats] = useState<UserStatsData | null>(null); // Stocke les statistiques de l'utilisateur
  const [isLoading, setIsLoading] = useState<boolean>(true); // Indicateur de chargement
  const [error, setError] = useState<string | null>(null); // Gestion des erreurs

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await getUser(userId); // Récupère les données utilisateur
        setStats(response.data.keyData); // Récupère les statistiques (calories, protéines, etc.)
      } catch (err) {
        console.error('Erreur lors de la récupération des statistiques utilisateur :', err);
        setError('Impossible de récupérer les statistiques.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserStats();
  }, [userId]);

  if (isLoading) {
    return <p>Chargement des statistiques...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="user-stats">
      <div className="stat-card">
        <p>{stats?.calorieCount} kcal</p>
        <h3>Calories</h3>
      </div>
      <div className="stat-card">
        <p>{stats?.proteinCount} g</p>
        <h3>Protéines</h3>
      </div>
      <div className="stat-card">
        <p>{stats?.carbohydrateCount} g</p>
        <h3>Glucides</h3>
      </div>
      <div className="stat-card">
        <p>{stats?.lipidCount} g</p>
        <h3>Lipides</h3>
      </div>
    </div>
  );
};

export default UserStats;
