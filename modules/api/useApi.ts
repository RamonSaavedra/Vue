import axios from "axios";

const API_URL = "http://localhost:5122/todoitems";

type Todo = {
  id?: number;
  departmentName: string;
  departmentHead: string;
  departmentDescription: string;

  employeesName: string;
  employeesLastName: string;
  employeesDepartment: string;
  employeesExtension: number;

  isComplete: boolean;
};

const useApi = () => {
  const fetchTodos = async (): Promise<Todo[] | undefined> => {
    try {
      const response = await axios.get<Todo[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching todos", error);
      return undefined;
    }
  };

  const createTodo = async (todo: Todo): Promise<Todo | undefined> => {
    try {
      const response = await axios.post<Todo>(API_URL, todo);
      return response.data;
    } catch (error) {
      console.error("Error creating a todo:", error);
      return undefined;
    }
  };

  const updateTodo = async (
    id: number,
    todo: Todo
  ): Promise<Todo | undefined> => {
    try {
      const response = await axios.put<Todo>(`${API_URL}/${id}`, todo);
      return response.data;
    } catch (error) {
      console.error("Error updating a todo", error);
      return undefined;
    }
  };

  const deleteTodo = async (id: number): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Error deleting the todo", error);
    }
  };

  return {
    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useApi;
