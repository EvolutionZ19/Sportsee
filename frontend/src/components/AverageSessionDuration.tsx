import React, { useEffect, useState } from 'react';
import { getUserAverageSessions } from '../services/apiService'; // Assurez-vous que cette fonction existe
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface AverageSession {
  day: number;
  sessionLength: number;
}

interface AverageSessionDurationProps {
  userId: number;
}

const AverageSessionDuration: React.FC<AverageSessionDurationProps> = ({ userId }) => {
  const [sessionData, setSessionData] = useState<AverageSession[]>([]); // Données des sessions
  const [error, setError] = useState<string | null>(null); // Erreurs possibles
  const [isLoading, setIsLoading] = useState<boolean>(true); // Indicateur de chargement

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await getUserAverageSessions(userId);
        setSessionData(response.data.sessions); // Stocker les sessions dans l'état
      } catch (err) {
        console.error('Erreur lors de la récupération des données des sessions :', err);
        setError('Impossible de récupérer les données des sessions.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionData();
  }, [userId]);

  if (isLoading) {
    return <p>Chargement des données des sessions...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!sessionData.length) {
    return <p>Aucune donnée disponible pour la durée des sessions.</p>;
  }

  return (
    <div className="average-session-duration">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={sessionData}>
          {/* Grille */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          
          {/* Axe X : Jours de la semaine */}
          <XAxis dataKey="day" tickLine={false} tick={{ fill: '#9b9b9b', fontSize: 12 }} axisLine={false} />
          
          {/* Axe Y : Durée des sessions en minutes */}
          <YAxis tickLine={false} tick={{ fill: '#9b9b9b', fontSize: 12 }} axisLine={false} />
          
          {/* Tooltip */}
          <Tooltip />

          {/* Ligne des sessions */}
          <Line type="monotone" dataKey="sessionLength" stroke="#E60000" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionDuration;
