import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./todoSlice";
import filterReducer from "./filterSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
  },
});
