import React, { FC } from 'react';
import { Card, Input, Button, Typography } from '@material-tailwind/react';

export const Login: FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Card shadow={true} className="w-[500px] h-[400px] flex flex-col justify-evenly items-center bg-[#273244] text-[#F5F5F5]">
        <Typography variant="h4">Task Ninja</Typography>
        <form className="mt-6 mb-2 max-w-screen-lg w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" color="lime" className="text-[#d7d7d7]" />
            <Input type="password" size="lg" label="Password" color="lime" className="text-[#d7d7d7]" />
          </div>
          <Button className="mt-6 bg-[#A4F22D] text-black shadow-none hover:shadow-none" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};
