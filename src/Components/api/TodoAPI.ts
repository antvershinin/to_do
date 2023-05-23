import axios from "axios";
import { ITask } from "../../redux/todoSlice";

const baseURL = "http://localhost:8000/";

export const getTodosDB = async () => {
  const allTodos = await axios.get<ITask[]>(baseURL + `todos`);
  return allTodos;
};

export const deleteAllTodos = () => {
  return axios.delete(baseURL);
};

export const editTodoDB = (id: string, newText: string) => {
  return axios.put(baseURL + id, {
    text: newText,
  });
};
export const completeTodoDB = (id: string, completed: boolean) => {
  return axios.put<{ todo: ITask }>(baseURL + id, {
    completed,
  });
};

export const completeAllTodoDB = (completed: boolean) => {
  return axios.put(baseURL, {
    completed,
  });
};

export const deleteTodoDB = (id: string) => {
  return axios.delete(baseURL + id, {});
};

export const addTodoDB = (text: string) => {
  return axios.post(baseURL, text);
};
