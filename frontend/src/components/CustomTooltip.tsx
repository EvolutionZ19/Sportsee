import React from 'react';
import { TooltipProps } from 'recharts';

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#e60000', 
          padding: '5px 10px',
          borderRadius: '5px',
          color: 'white', 
          fontWeight: 'bold',
        }}
      >
        <p style={{ margin: 0 }}>{`${payload.find((data) => data.dataKey === 'weight')?.value}kg`}</p>
        <p style={{ margin: 0 }}>{`${payload.find((data) => data.dataKey === 'calories')?.value}kCal`}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
