import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchUserButton from "../SearchUserButton/SearchUserButton";

export default function SearchUserInput() {
  const [searchName, setSearchName] = useState("");

  const sendForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`
    https://api.github.com/users/${searchName}
    `);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      alert("User not found");
    }
  };

  return (
    <Paper
      onSubmit={sendForm}
      va
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
      <SearchUserButton type="submit" sendForm={sendForm} />
    </Paper>
  );
}
