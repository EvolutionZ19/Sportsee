import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getUser } from '../services/apiService'; 

interface ScoreDuJourProps {
  userId: number;
}

const ScoreDuJour: React.FC<ScoreDuJourProps> = ({ userId }) => {
  const [score, setScore] = useState<number | null>(null); // Stocke le score du jour
  const [isLoading, setIsLoading] = useState<boolean>(true); // Indicateur de chargement
  const [error, setError] = useState<string | null>(null); // Gestion des erreurs

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser(userId); // Récupère les données utilisateur
        setScore(response.data.todayScore); // Récupère le score du jour
      } catch (err) {
        console.error('Erreur lors de la récupération des données utilisateur :', err);
        setError('Impossible de récupérer les données du score.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (isLoading) {
    return <p>Chargement du score...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="score-du-jour">
      <h2>Score</h2>
      {score !== null ? (
        <div style={{ width: '100px', height: '100px' }}>
          <CircularProgressbar
            value={score * 100} // Multiplie le score par 100 pour avoir un pourcentage
            text={`${Math.round(score * 100)}%`} // Affiche le score en pourcentage
            styles={{
              path: {
                stroke: '#E60000',
                strokeLinecap: 'round',
                strokeWidth: 10,
              },
              trail: {
                stroke: '#e0e0e0',
              },
              text: {
                fill: '#000',
                fontSize: '18px',
              },
            }}
          />
        </div>
      ) : (
        <p>Score non disponible</p>
      )}
      <p style={{ marginTop: '10px', fontSize: '14px', color: '#74798c' }}>
        de votre objectif
      </p>
    </div>
  );
};

export default ScoreDuJour;
