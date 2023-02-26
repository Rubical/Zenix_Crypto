import { createSlice } from "@reduxjs/toolkit";

export const cryptoInfoSlice = createSlice({
  name: "cryptoInfo",
  initialState: null,
  reducers: {
    setCryptoInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCryptoInfo } = cryptoInfoSlice.actions;
export default cryptoInfoSlice.reducer;
