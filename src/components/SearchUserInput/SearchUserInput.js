import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchUserButton from "../SearchUserButton/SearchUserButton";

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
      <Paper
        onSubmit={sendForm}
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search user"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <SearchUserButton />
      </Paper>
    );
  }
}
