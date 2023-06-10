import React, { FC, FormEvent, useContext, useState } from 'react';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { InformationCircleIcon, CubeIcon } from '@heroicons/react/24/outline';
import { TodoListContext } from '../contexts/TodoListContext';

export const Login: FC = () => {
  const { login, isLoading } = useContext(TodoListContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage('');
    if (validateInput()) login(username, password);
  };

  const validateInput = () => {
    if (username.trim() === '') {
      setErrorMessage('Username is required');
    } else if (password.trim() === '') setErrorMessage('Password is required');

    return true;
  };

  return (
    <div className="flex items-center justify-center h-full">
      {isLoading ? (
        <div className="text-white text-4xl flex items-center">
          <CubeIcon className="w-8 h-8 mr-3" />
          LOADING.......
        </div>
      ) : (
        <Card shadow={true} className="w-[500px] h-[400px] flex flex-col justify-evenly items-center bg-[#273244] text-[#F5F5F5]">
          <Typography variant="h4">Task Ninja</Typography>
          <form className="mt-6 mb-2 max-w-screen-lg w-96" onSubmit={handleLogin}>
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Email"
                color="lime"
                className="!text-[#d7d7d7]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                color="lime"
                className="!text-[#d7d7d7]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="mt-6 bg-[#A4F22D] text-black shadow-none hover:shadow-none" fullWidth type="submit">
              Login
            </Button>
            {errorMessage && (
              <Typography variant="small" color="gray" className="flex items-center gap-1 font-normal mt-2 text-[#d7d7d7]">
                <InformationCircleIcon className="w-4 h-4 -mt-px" />
                {errorMessage}
              </Typography>
            )}
          </form>
        </Card>
      )}
    </div>
  );
};
