import { createSlice } from "@reduxjs/toolkit";

export const pageCountSlice = createSlice({
  name: "pageCount",
  initialState: 1,
  reducers: {
    setPage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPage } = pageCountSlice.actions;
export default pageCountSlice.reducer;
