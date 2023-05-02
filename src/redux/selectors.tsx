import { createSelector } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { ITask, ITaskState } from "./todoSlice";
import { RootState } from "./store";

export const selectAll = (state:RootState) => state.tasks.tasks;
export const selectFilter = (state:RootState) => state.tasks.activeFilter;
=======
import { ITask } from "./todoSlice";

export const selectAll = (state: any) => state.tasks.tasks;
export const selectFilter = (state: any) => state.tasks.activeFilter;
>>>>>>> 0c27b9d5ddb66c5a44698b36424c83f76677ee29

export const listByFilter = createSelector(
  [selectAll, selectFilter],
  (tasks, filter) => {
    if (filter === "Completed") {
      return tasks.filter((el: ITask) => el.completed);
    }
    if (filter === "Active") {
      return tasks.filter((el: ITask) => !el.completed);
    }

    return tasks;
  }
);
