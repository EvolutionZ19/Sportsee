import React, { useEffect, useState } from 'react';
import { getUserPerformance } from '../services/apiService'; 
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface PerformanceData {
  kind: string;
  value: number;
}

interface PerformanceChartProps {
  userId: number;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ userId }) => {
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]); // Données de performance
  const [error, setError] = useState<string | null>(null); // Erreurs possibles
  const [isLoading, setIsLoading] = useState<boolean>(true); // Indicateur de chargement

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await getUserPerformance(userId); // Récupérer les données de performance
        setPerformanceData(response.data.data); // Stocker les données de performance dans l'état
      } catch (err) {
        console.error('Erreur lors de la récupération des données de performance :', err);
        setError('Impossible de récupérer les données de performance.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPerformanceData();
  }, [userId]);

  if (isLoading) {
    return <p>Chargement des données de performance...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="performance-chart">
      <h2>Intensité</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={performanceData}>
          {/* Grille */}
          <PolarGrid strokeDasharray="3 3" />
          
          {/* Axe des catégories */}
          <PolarAngleAxis dataKey="kind" tick={{ fill: '#9b9b9b', fontSize: 12 }} />

          {/* Axe des valeurs */}
          <PolarRadiusAxis angle={30} domain={[0, 250]} tick={false} />
          
          {/* Ligne du graphique */}
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.6}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
