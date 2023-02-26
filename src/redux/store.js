import { configureStore } from "@reduxjs/toolkit";
import githubAuthReducer from "./githubAuthSlice";
import anonAuthReducer from "./anonAuthSlice";
import loadingReducer from "./loadingSlice";
import cryptoInfoReducer from "./cryptoInfoSlice";
import modalReducer from "./modalSlice";
import searchNameReducer from "./searchNameSlice";
import userInfoReducer from "./userInfoSlice";
import newsReducer from "./newsSlice";
import filterReducer from "./filterSlice";
import paginationReducer from "./paginationSlice";
import pageCountReducer from "./pageCountSlice";

export const store = configureStore({
  reducer: {
    githubAuth: githubAuthReducer,
    anonAuth: anonAuthReducer,
    loading: loadingReducer,
    cryptoInfo: cryptoInfoReducer,
    modal: modalReducer,
    searchName: searchNameReducer,
    userInfo: userInfoReducer,
    news: newsReducer,
    filter: filterReducer,
    pagination: paginationReducer,
    pageCount: pageCountReducer,
  },
});
