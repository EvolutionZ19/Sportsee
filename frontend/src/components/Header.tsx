import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">SportSee</div>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
