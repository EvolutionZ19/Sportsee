import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>🏋️‍♀️</li>
        <li>🏊‍♂️</li>
        <li>🚴‍♂️</li>
        <li>💪</li>
      </ul>
      <div className="sidebar-footer">
        Copyright SportSee 2020
      </div>
    </aside>
  );
};

export default Sidebar;
