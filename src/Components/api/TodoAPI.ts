import axios from "axios";

const baseURL = "http://localhost:8000/";

export const getAllTodos = async () => {
  const allTodos = await axios.get(baseURL + "todos");
  console.log(allTodos.data);
};

export const editTodoDB = async (id: String, newText: String) => {
  await axios.put(baseURL + id, {
    text: newText,
  });
};

editTodoDB("6464bfa7eb0d6a27a8bd5f83", "НОВЫЙШИЙ ТЕКСТ");
