import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchUserButton from "../SearchUserButton/SearchUserButton";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/userInfoSlice";
import { setSearchName } from "../../redux/searchNameSlice";
import cl from "./SearchUserInput.module.css";

export default function SearchUserInput() {
  const dispatch = useDispatch();
  const searchName = useSelector((state) => state.searchName);
  const userInfo = useSelector((state) => state.userInfo);

  const sendForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`
    https://api.github.com/users/${searchName}
    `);

    if (response.ok) {
      const data = await response.json();
      dispatch(setUserInfo(data));
    } else {
      alert("User not found");
    }
  };

  if (userInfo) {
    return <></>;
  } else {
    return (
      <>
        <Paper
          className={cl.form}
          onSubmit={sendForm}
          component="form"
          sx={{
            backgroundColor: "#e2e2e276	",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            margin: "20px",
          }}
        >
          <InputBase
            className={cl.input}
            value={searchName}
            onChange={(e) => {
              dispatch(setSearchName(e.target.value));
            }}
            sx={{ ml: 1, flex: 1, color: "black" }}
            placeholder="Enter GitHub username"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <SearchUserButton />
        </Paper>
      </>
    );
  }
}
