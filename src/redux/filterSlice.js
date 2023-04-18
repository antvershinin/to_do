import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { activeFilter: null },
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload.filterName;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
