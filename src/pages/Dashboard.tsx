import { Card, Typography } from '@material-tailwind/react';
import React, { FC } from 'react';
import { Header } from '../components/Header';

export const Dashboard: FC = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-full">
        <Card shadow={true} className="w-[500px] min-h-[400px] flex flex-col justify-evenly items-center bg-[#273244] text-[#F5F5F5]">
          <Typography variant="h4">Task List</Typography>
        </Card>
      </div>
    </>
  );
};
