import React from 'react';
import { Routes } from 'react-router-dom';
import AppRoutes from '../utils/routes.jsx';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <AppRoutes />
      </Routes>
    </div>
  );
};
