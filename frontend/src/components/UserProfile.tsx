import React, { useEffect, useState } from 'react';
import { getUser } from '../services/apiService';
import ActivityChart from './ActivityChart';

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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(12); // ID de l'utilisateur
        setUser(userData.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Chargement des données utilisateur...</p>;
  }

  return (
    <div>
      <h1>Bonjour, {user.userInfos.firstName} !</h1>
      <p>Score du jour : {user.todayScore * 100}%</p>
      <ActivityChart userId={user.id} />
    </div>
  );
};

export default UserProfile;
