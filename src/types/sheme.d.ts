interface ITodo {
  _id: number;
  name: string;
  url: string;
  price: number;
}

interface ITodoStores {
  loading: boolean;
  success: boolean;
  error: boolean;
  data: ITodo[] | null;
  errorData: string | null;
  getTodo: () => Promise<void>;
  addTodo: (newTodo: Omit<Todo, 'id'>) => Promise<void>;
  patchTodo: (_id: number, updateTodo: Partial<ITodo>) => Promise<void>;
  deleteTodo: (_id: number) => Promise<void>;
}
