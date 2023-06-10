import { Button, Card, Input, Typography, List, ListItem, ListItemPrefix, Checkbox } from '@material-tailwind/react';
import React, { FC, useState } from 'react';
import { Header } from '../components/Header';

export const Dashboard: FC = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    console.log('newTodo', newTodo);
  };

  return (
    <div className="h-full ">
      <Header />
      <div className="flex justify-center mt-20 ">
        <Card shadow={true} className="w-[600px] min-h-[350px] max-h-[550px] flex flex-col items-center bg-[#273244] text-[#F5F5F5] overflow-auto">
          <Typography variant="h4" className="mt-10">
            Task List
          </Typography>
          <div className="flex mt-10 gap-2">
            <Input
              size="lg"
              label="Add new task"
              color="lime"
              className="text-[#d7d7d7]"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button className="bg-[#A4F22D] text-black shadow-none hover:shadow-none" onClick={handleAddTodo}>
              +
            </Button>
          </div>
          <List>
            <ListItem className="hover:bg-[#273244] text-[#d7d7d7] hover:text-[#d7d7d7] focus:text-[#d7d7d7] focus:bg-[#273244] active:text-[#d7d7d7] active:bg-[#273244]">
              <Checkbox color="lime" />
              {newTodo}
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
};
