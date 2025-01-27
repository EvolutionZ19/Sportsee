import React from 'react';
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
import CustomTooltip from './CustomTooltip'; // import du composant CustomTooltip

const mockData = [
  { day: '1', weight: 70, calories: 240 },
  { day: '2', weight: 69, calories: 220 },
  { day: '3', weight: 68, calories: 356 },
  { day: '4', weight: 70, calories: 180 },
  { day: '5', weight: 69, calories: 290 },
  { day: '6', weight: 71, calories: 160 },
  { day: '7', weight: 70, calories: 200 },
  { day: '8', weight: 72, calories: 250 },
  { day: '9', weight: 71, calories: 300 },
  { day: '10', weight: 70, calories: 220 },
];

const ActivityChart: React.FC = () => {
  return (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={mockData}  // remplacement de mockActivity par mockData
          margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
          barCategoryGap={25}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fill: '#9b9b9b', fontSize: 12 }}
            axisLine={false}
          />
          <YAxis
            yAxisId="calories"
            tickLine={false}
            tick={{ fill: '#9b9b9b', fontSize: 12 }}
            axisLine={false}
          />
          <YAxis
            yAxisId="weight"
            orientation="right"
            tickLine={false}
            tick={{ fill: '#9b9b9b', fontSize: 12 }}
            axisLine={false}
            domain={[68, 72]}
          />
          <Tooltip content={<CustomTooltip />} />
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
          <Bar
            dataKey="calories"
            yAxisId="calories"
            fill="#e60000"
            name="Calories brûlées (kCal)"
            radius={[10, 10, 0, 0]}
            barSize={8}
          />
          <Bar
            dataKey="weight"
            yAxisId="weight"
            fill="#282D30"
            name="Poids (kg)"
            radius={[10, 10, 0, 0]}
            barSize={8}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
