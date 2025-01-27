import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Données factices
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
    <div className="card">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={mockData} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="day" tick={{ fill: '#9b9b9b' }} />
          <YAxis tick={{ fill: '#9b9b9b' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="calories" fill="#ff0000" barSize={8} name="Calories brûlées" />
          <Bar dataKey="weight" fill="#000" barSize={8} name="Poids (kg)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
