import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { jwtToken, userAuth } from '../backend/data/auth';

export interface TodoListContextInterface {
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface TodoListProviderProps {
  children: ReactNode;
}
const defaultState = {
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  isLoading: true,
} as TodoListContextInterface;

export const TodoListContext = createContext(defaultState);

export const TodoListProvider: FC<TodoListProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string) => {
    if (username === userAuth.data.username && password === userAuth.data.password) {
      // In actual scenario: Generate a JWT token with the username and then authenticate and set token in localstorage
      setIsAuthenticated(true);
      localStorage.setItem('token', jwtToken.token.secret_key);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  return <TodoListContext.Provider value={{ login, logout, isAuthenticated, isLoading }}>{children}</TodoListContext.Provider>;
};
