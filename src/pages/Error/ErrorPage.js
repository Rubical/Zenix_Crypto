import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export default function Error() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "80px",
        minHeight: "80vh",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      <div>
        <Typography variant="h1">404</Typography>
        <Typography variant="h6">
          The page you’re looking for doesn’t exist.
        </Typography>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
        alt=""
        width={500}
        height={250}
      />
    </div>
  );
}
