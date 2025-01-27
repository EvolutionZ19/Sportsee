import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ActivityChart from './components/ActivityChart';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <h1>
            Bonjour <span style={{ color: '#ff4500' }}>Thomas</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 🎉</p>
          <ActivityChart />
        </main>
      </div>
    </div>
  );
};

export default App;
