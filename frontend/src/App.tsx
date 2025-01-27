import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* En-tête de l'application */}
      <Header />

      {/* Mise en page principale */}
      <div className="main-layout">
        {/* Barre latérale */}
        <Sidebar />

        {/* Contenu principal */}
        <main className="content">
          {/* Intégration du composant UserProfile */}
          <UserProfile />
        </main>
      </div>
    </div>
  );
};

export default App;
