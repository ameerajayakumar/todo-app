import { Button, Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
import { userDetails } from '../backend/data/mockAuth';

export const Header = () => {
  const { logout } = useContext(TodoListContext);

  return (
    <div className="bg-[#273244] flex justify-between text-[#F5F5F5]">
      <Typography variant="h4" className="m-4">
        Task
        <span className="ml-1 text-[#A4F22D]">Ninja</span>
      </Typography>

      <div className="flex justify-center items-center mr-4">
        <Typography variant="h6" className="mr-3">
          Welcome, {userDetails.user.name}
        </Typography>
        <Button className=" bg-[#A4F22D] text-black shadow-none hover:shadow-none" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
