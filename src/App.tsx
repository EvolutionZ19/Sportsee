import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <h1>Bienvenue Thomas !</h1>
          {/* graphiques  pour plus tard*/}
        </main>
      </div>
    </div>
  );
};

export default App;
