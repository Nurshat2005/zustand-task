'use client';
import { useForm } from 'react-hook-form';
import scss from './TodoAdd.module.scss';
import { useTodoStore } from '@/stores/useTodoStore';

const TodoAdd = () => {
  const { register, handleSubmit, reset } = useForm<ITodo>();
  const { addTodo } = useTodoStore();
  const addTodoList = (data) => {
    addTodo(data);
    reset();
  };
  return (
    <div className={scss.TodoAdd}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(addTodoList)}>
            <input
              type="text"
              placeholder="Product Name..."
              {...register('name', { required: true })}
            />
            <input
              type="text"
              placeholder="Product Url..."
              {...register('url', { required: true })}
            />
            <input
              type="text"
              placeholder="Product Price..."
              {...register('price', { required: true })}
            />
            <button type="submit">SAVE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoAdd;
