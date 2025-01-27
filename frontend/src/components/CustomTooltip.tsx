import React from 'react';
import { TooltipProps } from 'recharts';

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // Récupérer les valeurs de poids et de calories
    const kilogram = payload.find((data) => data.dataKey === 'kilogram')?.value; // Assurez-vous que c'est "kilogram"
    const calories = payload.find((data) => data.dataKey === 'calories')?.value;

    // Vérification que les données existent avant de les afficher
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
        {kilogram !== undefined && <p style={{ margin: 0 }}>{`${kilogram} kg`}</p>} {/* Utiliser kilogram */}
        {calories !== undefined && <p style={{ margin: 0 }}>{`${calories} kCal`}</p>}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
