import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: 0,
  reducers: {
    setTotalPages: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTotalPages } = paginationSlice.actions;
export default paginationSlice.reducer;
