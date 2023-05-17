import axios from "axios";

const baseURL = "http://localhost:8000/";

export const getAllTodos = async () => {
  const allTodos = await axios.get(baseURL + "todos");
  return allTodos
};

export const editTodoDB = async (id: String, newText: String) => {
  await axios.put(baseURL + id, {
    text: newText,
  });
};
export const completeTodoDB = async (id: String, completed: Boolean) => {
  await axios.put(baseURL + id, {
    completed
  });
};

export const addTodoDB =async (text : String) => {
  await axios.post(baseURL, {text})
}


