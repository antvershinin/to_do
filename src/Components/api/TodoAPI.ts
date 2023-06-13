import axios from "axios";
import { ITask } from "../../redux/todoSlice";

const baseURL = "http://127.0.0.1:8000/todos";

export const getTodosDB = async (filter?: string) => {
  const allTodos = await axios.get<ITask[]>(
    baseURL
  );

  return allTodos;
};

export const addTodoDB = (text: string) => {
  return axios.post(baseURL,  { text } );
};

export const deleteAllTodosDB = () => {
  return axios.delete(`${baseURL}/DeleteAll`);
};

export const completeAllTodoDB = (tumbler: boolean) => {
  return axios.put(`${baseURL}/CompleteAll`,  tumbler);
};

export const deleteTodoDB = (id: string) => {
  return axios.delete(`${baseURL}/${id}`);
};

export const editTodoDB = (props: ITask) => {
  return axios.patch(`${baseURL}/${props.id}`, {
    text: props.text,
    completed: props.completed,
  });
};
