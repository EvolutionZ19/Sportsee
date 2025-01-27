import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Données factices pour le graphique
const mockData = [
  { day: '1', weight: 70, calories: 240 },
  { day: '2', weight: 71, calories: 220 },
  { day: '3', weight: 72, calories: 280 },
  { day: '4', weight: 69, calories: 210 },
  { day: '5', weight: 70, calories: 200 },
  { day: '6', weight: 72, calories: 290 },
  { day: '7', weight: 71, calories: 250 },
];

const ActivityChart: React.FC = () => {
  return (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={mockData}
          margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
          barGap={8} // Ajoute de l'espace entre les barres
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="day" tick={{ fill: '#9b9b9b' }} />
          <YAxis tick={{ fill: '#9b9b9b' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          />
          <Legend verticalAlign="top" height={36} />
          <Bar
            dataKey="calories"
            fill="#ff4500" // Rouge pour les calories
            name="Calories brûlées (kCal)"
            radius={[10, 10, 0, 0]} // Coins arrondis en haut
            barSize={12} // Taille des barres
          />
          <Bar
            dataKey="weight"
            fill="#000000" // Noir pour le poids
            name="Poids (kg)"
            radius={[10, 10, 0, 0]} // Coins arrondis en haut
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
