import React, { FC } from 'react';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
