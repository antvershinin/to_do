import axios from "axios";
import { ITask } from "../../redux/todoSlice";

const baseURL = "http://localhost:8000/";

export const getTodosDB = async (filter: string = "All") => {
  const allTodos = await axios.get<ITask[]>(baseURL + `todos/${filter}`);
  return allTodos;
};

export const deleteAllTodos = async () => {
  await axios.delete(baseURL);
};

export const editTodoDB = async (id: string, newText: string) => {
  await axios.put(baseURL + id, {
    text: newText,
  });
};
export const completeTodoDB = (id: string, completed: boolean) => {
  return axios.put<{todo: ITask}>(baseURL + id, {
    completed,
  });
};

export const completeAllTodoDB = (completed: boolean) => {
  return axios.put(baseURL, {
    completed,
  });
};

export const deleteTodoDB = async (id: string) => {
  await axios.delete(baseURL + id, {});
};

export const addTodoDB = async (text: string) => {
  await axios.post(baseURL, { text });
};
