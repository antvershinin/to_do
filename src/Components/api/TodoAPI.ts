import axios from "axios";
import { ITask } from "../../redux/todoSlice";

const baseURL = "http://localhost:8000/";

export const getTodosDB = async (filter?: string) => {
  const allTodos = await axios.get<ITask[]>(
    baseURL + `todos` + `?filter=${filter}`
  );

  return allTodos;
};

export const addTodoDB = (text: string) => {
  return axios.post(baseURL, { data: { text } });
};

export const deleteAllTodosDB = () => {
  return axios.delete(baseURL + "deleteAll");
};

export const completeAllTodoDB = (tumbler: boolean) => {
  return axios.put(baseURL + "completeAll", { completed: tumbler });
};

export const deleteTodoDB = (id: string) => {
  return axios.delete(baseURL, { data: { _id: id } });
};

export const editTodoDB = (props: ITask) => {
  return axios.patch(baseURL + `${props._id}`, {
    text: props.text,
    completed: props.completed,
  });
};
