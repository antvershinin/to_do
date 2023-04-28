import { createSelector } from "@reduxjs/toolkit";
import { ITask } from "./todoSlice";

export const selectAll = (state: any) => state.tasks.tasks;
export const selectFilter = (state: any) => state.tasks.activeFilter;

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
