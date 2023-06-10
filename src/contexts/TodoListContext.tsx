import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import { jwtToken, userAuth } from '../backend/data/mockAuth';

export interface Todo {
  id: string;
  title: string;
  subTasks: Todo[];
}
export interface TodoListContextInterface {
  login: (username: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  todoList: Todo[];
  setTodoList: Dispatch<SetStateAction<Todo[]>>;
}

export interface TodoListProviderProps {
  children: ReactNode;
}
const defaultState = {
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  isLoading: true,
  todoList: [],
  setTodoList: (todo: Todo[]) => {},
} as TodoListContextInterface;

export const TodoListContext = createContext(defaultState);

export const TodoListProvider: FC<TodoListProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (todoList.length > 0) localStorage.setItem('todolist', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    const data = localStorage.getItem('todolist');
    console.log('data', data);

    if (data) {
      setTodoList(JSON.parse(data));
    }
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

  return <TodoListContext.Provider value={{ login, logout, isAuthenticated, isLoading, todoList, setTodoList }}>{children}</TodoListContext.Provider>;
};
