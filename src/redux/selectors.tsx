import { createSelector } from "@reduxjs/toolkit";

export const selectAll = (state) => state.tasks.tasks;
export const selectFilter = (state) => state.tasks.activeFilter;

export const listByFilter = createSelector(
  [selectAll, selectFilter],
  (tasks, filter) => {
    if (filter === "Completed") {
      return tasks.filter((el) => el.completed);
    }
    if (filter === "Active") {
      return tasks.filter((el) => !el.completed);
    }

    return tasks;
  }
);
