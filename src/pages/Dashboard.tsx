/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Input, Typography, Checkbox } from '@material-tailwind/react';
import React, { FC, useContext, useState } from 'react';
import { Header } from '../components/Header';
import { Todo, TodoListContext } from '../contexts/TodoListContext';

export const Dashboard: FC = () => {
  const [task, setTask] = useState('');
  const [subTask, setSubTask] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [checkedTasks, setCheckedTasks] = useState<String[]>([]);
  const { todoList, setTodoList } = useContext(TodoListContext);

  // to handle main todo
  const handleAddTodo = () => {
    const newTask: Todo = {
      id: Date.now().toString(),
      title: task,
      subTasks: [],
    };
    setTodoList((prevList) => [...prevList, newTask]);
    setTask('');
  };

  // to handle subtask input & add btn
  const handleSubTaskInput = (todoId: string) => {
    setSelectedId(todoId === selectedId ? '' : todoId);
  };

  // to handle checkbox changes
  const handleCheckbox = (todoId: string) => {
    if (checkedTasks.includes(todoId)) {
      setCheckedTasks(checkedTasks.filter((id) => id !== todoId));
    } else {
      setCheckedTasks([...checkedTasks, todoId]);
    }
  };

  // to handle subtask todo
  const handleSubTaskTodo = (todoId: string) => {
    const newSubTask: Todo = {
      id: Date.now().toString(),
      title: subTask,
      subTasks: [],
    };

    setTodoList((prevList) =>
      prevList.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            subTasks: [...todo.subTasks, newSubTask],
          };
        }
        return todo;
      })
    );
    setSelectedId('');
    setSubTask('');
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="flex justify-center h-[90%]">
        <Card shadow={true} className="mt-10 w-[50%] max-h-[90%] flex flex-col bg-[#273244] text-[#F5F5F5] overflow-auto">
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
                value={task}
                onChange={(e) => setTask(e.target.value)}
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
                  key={todo.id}
                  className={`hover:bg-[#273244] text-[#d7d7d7] hover:text-[#d7d7d7] focus:text-[#d7d7d7] focus:bg-[#273244] active:text-[#d7d7d7] active:bg-[#273244] flex flex-col items-start ${
                    checkedTasks.includes(todo.id) ? 'text-[#a3f22d75] hover:text-[#a3f22d75]' : ''
                  }`}
                >
                  <div className="w-full flex justify-start items-center">
                    <Checkbox
                      color="lime"
                      className="hover:before:opacity-0"
                      checked={checkedTasks.includes(todo.id)}
                      onChange={() => handleCheckbox(todo.id)}
                    />
                    <Typography
                      onClick={() => handleSubTaskInput(todo.id)}
                      className={`cursor-pointer ${checkedTasks.includes(todo.id) ? 'line-through' : ''}`}
                    >
                      {todo.title}
                    </Typography>
                  </div>

                  {todo.subTasks && todo.subTasks.length > 0 && (
                    <ul className="pl-3">
                      {todo.subTasks.map((subtask) => (
                        <li
                          key={subtask.id}
                          className={`hover:bg-[#273244] text-[#d7d7d7] hover:text-[#d7d7d7] focus:text-[#d7d7d7] focus:bg-[#273244] active:text-[#d7d7d7] active:bg-[#273244] flex justify-start items-center ${
                            checkedTasks.includes(subtask.id) ? 'text-[#a3f22d75] hover:text-[#a3f22d75]' : ''
                          }`}
                        >
                          <Checkbox
                            color="lime"
                            className="hover:before:opacity-0"
                            checked={checkedTasks.includes(subtask.id)}
                            onChange={() => handleCheckbox(subtask.id)}
                          />
                          <Typography className={`${checkedTasks.includes(subtask.id) ? 'line-through' : ''}`}>{subtask.title}</Typography>
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
                        value={subTask}
                        onChange={(e) => setSubTask(e.target.value)}
                      />
                      <Button className="bg-[#A4F22D] text-black shadow-none hover:shadow-none" onClick={() => handleSubTaskTodo(todo.id)}>
                        +
                      </Button>
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
