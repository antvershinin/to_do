import axios from "axios";

const baseURL = "http://localhost:8000/";

export const getTodosDB = async (filter: String = "All") => {
  const allTodos = await axios.get(baseURL + `todos/${filter}`);
  return allTodos;
};

export const deleteAllTodos = async () => {
  await axios.delete(baseURL);
};

export const editTodoDB = async (id: String, newText: String) => {
  await axios.put(baseURL + id, {
    text: newText,
  });
};
export const completeTodoDB = async (id: String, completed: Boolean) => {
  await axios.put(baseURL + id, {
    completed,
  });
};

export const completeAllTodoDB = async (completed: Boolean) => {
  await axios.put(baseURL, {
    completed,
  });
};

export const deleteTodoDB = async (id: String) => {
  await axios.delete(baseURL + id, {});
};

export const addTodoDB = async (text: String) => {
  await axios.post(baseURL, { text });
};
