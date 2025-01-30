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
  kind: number;
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

  // Libellés pour chaque type de performance
  const performanceLabels = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio',
  };

  // Formatage des données pour le graphique radar
  const data = performanceData.map(item => ({
    kind: performanceLabels[item.kind] || '',
    value: item.value,
  }));

  return (
    <div className="performance-chart">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={data}>
          {/* Grille */}
          <PolarGrid strokeDasharray="3 3" stroke="#fff" />

          {/* Axe des catégories (types de performance) */}
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            axisLine={false} // Pas de ligne pour l'axe
          />

          {/* Axe des valeurs */}
          <PolarRadiusAxis
            angle={30}
            domain={[0, 250]} // Plage dynamique de 0 à 250
            tick={false} // Pas de ticks
          />

          {/* Ligne du graphique */}
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.6}
            strokeWidth={3}
          />

          {/* Tooltip personnalisé */}
          <Tooltip contentStyle={{ backgroundColor: '#e60000', color: 'white', fontWeight: 'bold' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
