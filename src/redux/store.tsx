import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./todoSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
