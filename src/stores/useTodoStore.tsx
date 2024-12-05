import axios from 'axios';
import { create } from 'zustand';

const initialState: Omit<ITodoStores, 'getTodo' | 'addTodo'> = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
};
export const useTodoStore = create<ITodoStores>((set) => ({
  ...initialState,
  getTodo: async () => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.get<ITodo[]>(
        `https://api.elchocrud.pro/api/v1/f9fc31c9c4e1c72fb20fc8ed15096895/egzamen`
      );
      set({ ...initialState, success: true, data: res.data });
    } catch (err) {
      console.log('Error in data fetch:', err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
  addTodo: async (newTodo) => {
    set({ ...initialState, loading: true });
    try {
      const res = await axios.post<ITodo>(
        `https://api.elchocrud.pro/api/v1/f9fc31c9c4e1c72fb20fc8ed15096895/egzamen`,
        newTodo
      );
      set({
        ...initialState,
        success: true,
        data: res.data,
      });
    } catch (err) {
      console.log('Error in data fetch:', err);
      set({
        ...initialState,
        error: true,
        errorData: err.message,
      });
    }
  },
  patchTodo: async (_id, updateTodo) => {
    set({
      ...initialState,
      loading: true,
    });
    try {
      const res = await axios.patch<ITodo>(
        `https://api.elchocrud.pro/api/v1/f9fc31c9c4e1c72fb20fc8ed15096895/egzamen/${_id}`,
        updateTodo
      );
      set({ ...initialState, success: true, data: res.data });
    } catch (err) {
      console.log('error in updating todo ', err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
  deleteTodo: async (_id) => {
    set({ ...initialState, loading: true });
    try {
      const del = await axios.delete(
        `https://api.elchocrud.pro/api/v1/f9fc31c9c4e1c72fb20fc8ed15096895/egzamen/${_id}`
      );
      set({ ...initialState, success: true, data: del.data });
    } catch (error) {
      console.log('error in delete todo ', err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },
}));
