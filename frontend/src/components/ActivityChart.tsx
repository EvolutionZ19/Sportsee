import React, { useEffect, useState } from 'react';
import { getUserActivity } from '../services/apiService';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ActivitySession {
  day: string; // Format attendu par recharts (par exemple, '1', '2', etc.)
  kilogram: number;
  calories: number;
}

interface ActivityChartProps {
  userId: number;
}

const ActivityChart: React.FC<ActivityChartProps> = ({ userId }) => {
  const [activityData, setActivityData] = useState<ActivitySession[]>([]);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const activity = await getUserActivity(userId);
        setActivityData(activity.data.sessions);
      } catch (error) {
        console.error('Erreur lors de la récupération des données d’activité :', error);
      }
    };

    fetchActivity();
  }, [userId]);

  return (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={activityData} barCategoryGap={25}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
