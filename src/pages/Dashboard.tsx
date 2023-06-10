import { Button, Card, Input, Typography, Checkbox } from '@material-tailwind/react';
import React, { FC, useContext, useState } from 'react';
import { Header } from '../components/Header';
import { Todo, TodoListContext } from '../contexts/TodoListContext';

export const Dashboard: FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const { todoList, setTodoList } = useContext(TodoListContext);

  const handleAddTodo = () => {
    const newItem: Todo = {
      id: Date.now().toString(),
      title: newTodo,
      nestedTodos: [],
    };
    setTodoList((prevList) => [...prevList, newItem]);
    setNewTodo('');
  };
  console.log('todoList', todoList);

  const handleSubTaskInput = (todoId: string) => {
    setSelectedId(todoId === selectedId ? '' : todoId);
  };

  return (
    <div className="h-full ">
      <Header />
      <div className="flex justify-center mt-20 ">
        <Card shadow={true} className="w-[70%] min-h-[350px] max-h-[550px] flex flex-col bg-[#273244] text-[#F5F5F5] overflow-auto">
          <div className="flex flex-col items-center">
            <Typography variant="h4" className="mt-10">
              Task List
            </Typography>
            <div className="flex mt-10 gap-2">
              <Input
                size="lg"
                label="Add new task"
                color="lime"
                className="text-[#d7d7d7] w-[350px]"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <Button className="bg-[#A4F22D] text-black shadow-none hover:shadow-none" onClick={handleAddTodo}>
                +
              </Button>
            </div>
          </div>
          {todoList.length > 0 && (
            <ul className="p-7">
              {todoList.map((todo) => (
                <li
                  className="hover:bg-[#273244] text-[#d7d7d7] hover:text-[#d7d7d7] focus:text-[#d7d7d7] focus:bg-[#273244] active:text-[#d7d7d7] active:bg-[#273244] flex flex-col items-start"
                  key={todo.id}
                >
                  <div className="w-full flex justify-start items-center">
                    <Checkbox color="lime" />
                    <Typography onClick={() => handleSubTaskInput(todo.id)}>{todo.title}</Typography>
                  </div>

                  {todo.nestedTodos && todo.nestedTodos.length > 0 && (
                    <ul>
                      {todo.nestedTodos?.map((subtask) => (
                        <li
                          key={subtask.id}
                          className="hover:bg-[#273244] text-[#d7d7d7] hover:text-[#d7d7d7] focus:text-[#d7d7d7] focus:bg-[#273244] active:text-[#d7d7d7] active:bg-[#273244] flex justify-start items-center"
                        >
                          {subtask.title}
                        </li>
                      ))}
                    </ul>
                  )}
                  {selectedId === todo.id && (
                    <div className="flex my-2 gap-2 ml-10">
                      <Input
                        size="md"
                        label="Add sub task"
                        color="lime"
                        className="text-[#d7d7d7] w-[300px]"
                        // value={newTodo}
                        // onChange={(e) => setNewTodo(e.target.value)}
                      />
                      <Button className="bg-[#A4F22D] text-black shadow-none hover:shadow-none">+</Button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
};
