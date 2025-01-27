import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Données factices pour le graphique
const mockData = [
  { day: 'L', weight: 70, calories: 240 },
  { day: 'M', weight: 71, calories: 220 },
  { day: 'M', weight: 71, calories: 250 },
  { day: 'J', weight: 69, calories: 210 },
  { day: 'V', weight: 70, calories: 200 },
  { day: 'S', weight: 72, calories: 280 },
  { day: 'D', weight: 70, calories: 220 },
];

const ActivityChart: React.FC = () => {
  return (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="calories" fill="#ff4500" name="Calories brûlées" />
          <Bar dataKey="weight" fill="#8884d8" name="Poids (kg)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
