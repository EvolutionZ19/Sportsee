import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import CustomTooltip from './CustomTooltip'; // Tooltip personnalisé

interface ActivitySession {
  day: string;
  kilogram: number;
  calories: number;
}

interface ActivityChartProps {
  userId: number;
}

const ActivityChart: React.FC<ActivityChartProps> = ({ userId }) => {
  const [activityData, setActivityData] = useState<ActivitySession[]>([]); // Données d'activité
  const [error, setError] = useState<string | null>(null); // Erreurs possibles
  const [isLoading, setIsLoading] = useState<boolean>(true); // Indicateur de chargement

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        setActivityData(response.data.data.sessions); // Stocker les sessions dans l'état
      } catch (err) {
        console.error('Erreur lors de la récupération des données d’activité :', err);
        setError("Impossible de récupérer les données d'activité.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivityData();
  }, [userId]);

  if (isLoading) {
    return <p>Chargement des données d'activité...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!activityData.length) {
    return <p>Aucune donnée d'activité disponible.</p>;
  }

  return (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={activityData}
          margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
          barCategoryGap={25}
        >
          {/* Grille */}
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

          {/* Axe X : Formater la date pour afficher uniquement le jour */}
          <XAxis
            dataKey="day"
            tickFormatter={(day) => `${day.split('-')[2]}`} // Extraction du jour
            tickLine={false}
            tick={{ fill: '#9b9b9b', fontSize: 12 }}
            axisLine={false}
          />

          {/* Axe Y pour les calories (gauche) */}
          <YAxis
            yAxisId="calories"
            tickLine={false}
            tick={{ fill: '#9b9b9b', fontSize: 12 }}
            axisLine={false}
          />

          {/* Axe Y pour le poids (droite) */}
          <YAxis
            yAxisId="weight"
            orientation="right"
            tickLine={false}
            tick={{ fill: '#9b9b9b', fontSize: 12 }}
            axisLine={false}
            domain={['dataMin - 1', 'dataMax + 1']} // Plage dynamique
          />

          {/* Tooltip personnalisé */}
          <Tooltip content={<CustomTooltip />} />

          {/* Légende */}
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ top: -10, right: 10 }}
            iconType="circle"
            iconSize={10}
            formatter={(value: string) => (
              <span style={{ color: '#74798c', fontSize: 14 }}>{value}</span>
            )}
          />

          {/* Inverser l'ordre des barres ici : Barres pour le poids en premier et calories en second */}
          <Bar
            dataKey="kilogram" 
            yAxisId="weight"
            fill="#282D30"
            name="Poids (kg)"
            radius={[10, 10, 0, 0]}
            barSize={8}
          />

          <Bar
            dataKey="calories"
            yAxisId="calories"
            fill="#e60000"
            name="Calories brûlées (kCal)"
            radius={[10, 10, 0, 0]}
            barSize={8}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
