import TodoAdd from '@/app/components/TodoList/TodoAdd';
import TodoPoster from '@/app/components/TodoList/TodoPoster';
import React from 'react';

const page = () => {
  return (
    <>
      <TodoAdd />
      <TodoPoster />
    </>
  );
};

export default page;
