import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ActivityChart from './components/ActivityChart';
import AverageSessionDuration from './components/AverageSessionDuration'; 

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <h1>
            Bonjour <span style={{ color: '#ff4500' }}>Karl</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 🎉</p>
          <ActivityChart userId={12} /> {/* Affichage du graphique d'activité */}
          <AverageSessionDuration userId={12} /> {/* Ajouter le composant des sessions moyennes */}
        </main>
      </div>
    </div>
  );
};

export default App;
