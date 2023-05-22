import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITask {
  _id: String;
  id: string;
  text: string;
  completed: boolean;
}

export interface ITaskState {
  tasks: ITask[];
  activeFilter: string;
}

export const initialState: ITaskState = {
  tasks: [],
  activeFilter: "All",
};

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    fillState: (state, action) => {
      state.tasks = [...action.payload];
    },
    markComplete: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks.forEach((el) => {
        if (el.id !== action.payload.id) return el;
        el.completed = !el.completed;
      });
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter((el) => el.id !== action.payload.id);
    },

    changeText: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      state.tasks.forEach((el) => {
        if (el.id !== action.payload.id) return el;
        el.text = action.payload.text;
      });
    },
    completeAll: (state) => {
      if (state.tasks.length === 0) return;
      const tumbler = state.tasks.some((el) => !el.completed);
      state.tasks.forEach((el) => (el.completed = tumbler));
    },
    clearAll: (state) => {
      state.tasks = [];
    },
    setFilter: (state, action: PayloadAction<{ filterName: string }>) => {
      state.activeFilter = action.payload.filterName;
    },
  },
});

export const {
  fillState,
  markComplete,
  deleteTask,
  changeText,
  completeAll,
  clearAll,
  setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
