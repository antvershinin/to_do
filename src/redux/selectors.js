import { createSelector } from "@reduxjs/toolkit";

export const selectAll = (state) => state.tasks;
export const selectFilter = (state) => state.filters[0];

export const listLength = [];

export const listByFilter = createSelector(
  [selectAll, selectFilter],
  (tasks, filter) => {
    if (filter === "Completed") {
      listLength[0] = tasks.length;
      return tasks.filter((el) => el.completed);
    }
    if (filter === "Active") {
      listLength[0] = tasks.length;
      return tasks.filter((el) => !el.completed);
    }
    listLength[0] = tasks.length;
    return tasks;
  }
);
