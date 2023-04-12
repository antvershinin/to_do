import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    setFilter: (state, action) => {
      state[0] = action.payload.filterName;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
