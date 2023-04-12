import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      if (!action.payload.text.trim()) return;
      const newTask = {
        id: nanoid(5),
        text: action.payload.text,
        completed: false,
        inEditing: false,
      };
      state.unshift(newTask);
    },
    markComplete: (state, action) => {
      state.map((el) => {
        if (el.id === action.payload.id) {
          el.completed = !el.completed;
        }
      });
    },
    deleteTask: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    editTask: (state, action) => {
      state.map((el) => {
        if (el.id === action.payload.id) {
        }
      });
      return state;
    },
    completeAll: (state) => {
      if (state.length === 0) return;
      const tumbler = state[0].completed;
      state.map((el) => (el.completed = !tumbler));
    },
    clearAll: (state) => {
      return (state = []);
    },
  },
});

export const {
  addTask,
  markComplete,
  deleteTask,
  editTask,
  completeAll,
  clearAll,
} = todoSlice.actions;

export default todoSlice.reducer;
