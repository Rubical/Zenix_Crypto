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
  const searchNameHandler = (e) => {
    setSearchName(e.target.value);
  };

  if (userInfo) {
    return <></>;
  } else {
    return (
      <>
        <h1>Cyka</h1>
        <Paper
          className={cl.form}
          onSubmit={sendForm}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            className={cl.input}
            value={searchName}
            onChange={(e) => searchNameHandler(e)}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search user"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <SearchUserButton />
        </Paper>
      </>
    );
  }
}
