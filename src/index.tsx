import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';
import { TodoListProvider } from './contexts/TodoListContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoListProvider>
        <App />
      </TodoListProvider>
    </ThemeProvider>
  </React.StrictMode>
);
