import React, { FC, useContext } from 'react';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TodoListContext } from './contexts/TodoListContext';

const App: FC = () => {
  const { isAuthenticated } = useContext(TodoListContext);
  console.log('isAuthenticated', isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route index element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}></Route>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
