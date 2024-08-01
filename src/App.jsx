import React from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
