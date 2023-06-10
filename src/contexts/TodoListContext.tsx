import { FC, ReactNode, createContext, useState } from 'react';
import { jwtToken, userAuth } from '../backend/data/auth';

export interface TodoListContextInterface {
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface TodoListProviderProps {
  children: ReactNode;
}
const defaultState = {
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
} as TodoListContextInterface;

export const TodoListContext = createContext(defaultState);

export const TodoListProvider: FC<TodoListProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    if (username === userAuth.data.username && password === userAuth.data.username) {
      setIsAuthenticated(true);
      localStorage.setItem('token', jwtToken.token.secret_key);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  return <TodoListContext.Provider value={{ login, logout, isAuthenticated }}>{children}</TodoListContext.Provider>;
};
