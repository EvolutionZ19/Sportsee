import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ActivityChart from './ActivityChart';

// Typage des données utilisateur
interface UserInfos {
  firstName: string;
  lastName: string;
  age: number;
}

interface User {
  id: number;
  userInfos: UserInfos;
  todayScore: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // État pour les données utilisateur
  const [error, setError] = useState<string | null>(null); // État pour les erreurs
  const [isLoading, setIsLoading] = useState<boolean>(true); // État pour le chargement

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Récupère les données utilisateur depuis l'API
        const response = await axios.get('http://localhost:3000/user/12');
        console.log('Données utilisateur récupérées :', response.data.data);
        setUser(response.data.data); // Définit l'utilisateur
      } catch (err) {
        console.error('Erreur lors de la récupération des données utilisateur :', err);
        setError("Impossible de récupérer les données utilisateur.");
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Chargement des données utilisateur...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Aucune donnée utilisateur disponible.</p>;
  }

  // Vérifie que l'ID utilisateur est bien défini
  console.log('User ID dans UserProfile :', user.id);

  return (
    <div>
      <h1>Bonjour, {user.userInfos.firstName} !</h1>
      <p>Score du jour : {Math.round(user.todayScore * 100)}%</p>
      {user.id ? (
        <ActivityChart userId={user.id} />
      ) : (
        <p>Chargement des activités...</p>
      )}
    </div>
  );
};

export default UserProfile;
