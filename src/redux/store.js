import { configureStore } from "@reduxjs/toolkit";
import githubAuthReducer from "./githubAuthSlice";
import anonAuthReducer from "./anonAuthSlice";
import loadingReducer from "./loadingSlice";
import cryptoInfoReducer from "./cryptoInfoSlice";
import modalReducer from "./modalSlice";
import searchNameReducer from "./searchNameSlice";
import userInfoReducer from "./userInfoSlice";

export const store = configureStore({
  reducer: {
    githubAuth: githubAuthReducer,
    anonAuth: anonAuthReducer,
    loading: loadingReducer,
    cryptoInfo: cryptoInfoReducer,
    modal: modalReducer,
    searchName: searchNameReducer,
    userInfo: userInfoReducer,
  },
});
