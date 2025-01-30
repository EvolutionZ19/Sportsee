import React from 'react';
import { TooltipProps } from 'recharts';

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // Récupérer les valeurs de poids, calories et sessionLength
    const kilogram = payload.find((data) => data.dataKey === 'kilogram')?.value;
    const calories = payload.find((data) => data.dataKey === 'calories')?.value;
    const sessionLength = payload.find((data) => data.dataKey === 'sessionLength')?.value;

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
        {kilogram !== undefined && <p style={{ margin: 0 }}>{`${kilogram} kg`}</p>} {/* Affiche le poids */}
        {calories !== undefined && <p style={{ margin: 0 }}>{`${calories} kCal`}</p>} {/* Affiche les calories */}
        {sessionLength !== undefined && <p style={{ margin: 0 }}>{`${sessionLength} min`}</p>} {/* Affiche les minutes */}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
