import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchUserButton from "../SearchUserButton/SearchUserButton";

export default function SearchUserInput({
  sendForm,
  setSearchName,
  searchName,
  userInfo,
}) {
  const [searchNameDirty, setSearchNameDirty] = useState(false);
  const [searchNameError, setSearchNameError] = useState(
    "Field cannot be empty"
  );

  const blurHandler = () => {
    setSearchNameDirty(true);
  };

  const searchNameHandler = (e) => {
    setSearchName(e.target.value);
    const re = /\w{1,}/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setSearchNameError("Enter valid username");
    } else {
      setSearchNameError("");
    }
  };

  if (userInfo) {
    return <></>;
  } else {
    return (
      <>
        {searchNameDirty && searchNameError && (
          <div style={{ color: "red", fontSize: "20px", marginBottom: "10px" }}>
            {searchNameError}
          </div>
        )}
        <Paper
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
            value={searchName}
            onBlur={() => blurHandler()}
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
