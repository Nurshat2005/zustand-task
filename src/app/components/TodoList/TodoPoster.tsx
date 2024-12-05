'use client';
import { useTodoStore } from '@/stores/useTodoStore';
import scss from './TodoPoster.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const TodoPoster = () => {
  const { register, handleSubmit, reset } = useForm<ITodo>();

  const updateTodo = async (data: ITodo) => {
    try {
      await patchTodo(data._id, {
        url: data.url,
        price: data.price,
        name: data.name,
      });
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };
  const { getTodo, data, loading, error, patchTodo, deleteTodo} = useTodoStore();

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  return (
    <div className={scss.TodoPoster}>
      <div className="container">
        <div className={scss.content}>
          <center>
            {loading && (
              <div className={scss.lds_ring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            {error && <p>Error loading todos...</p>}
          </center>
          {data?.map((el, index) => (
            <form
              onSubmit={handleSubmit((formData) => updateTodo({ ...formData, _id: el._id }))}
              className={scss.poster}
              key={index}
            >
              <img className={scss.image} src={el.url} alt="image" width={300} height={350} />
              <div className={scss.text}>
                <h5>{el.price}</h5>
                <h4>{el.name}</h4>
                <input type="text" placeholder="url" {...register('url', { required: true })} />
                <input type="text" placeholder="price" {...register('price', { required: true })} />
                <input type="text" placeholder="name" {...register('name', { required: true })} />
              </div>
              <button type="submit">Upload</button>
              <button onClick={()=>deleteTodo(el._id)} type="button">Delete</button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPoster;
