import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchUserButton from "../SearchUserButton/SearchUserButton";

export default function SearchUserInput() {
  const [search, setSearch] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <Paper
      va
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search user"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <SearchUserButton type="submit" sendForm={sendForm} />
    </Paper>
  );
}
