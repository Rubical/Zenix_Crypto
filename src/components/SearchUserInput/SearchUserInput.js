import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchUserButton from "../SearchUserButton/SearchUserButton";

import cl from "./SearchUserInput.module.css";

export default function SearchUserInput({
  sendForm,
  setSearchName,
  searchName,
  userInfo,
}) {
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
          }}
        >
          <InputBase
            className={cl.input}
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
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
