import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function PageButton({ page, changePage, color }) {
  return (
    <Box
      onClick={() => {
        changePage(page);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: { color },
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        <Button>{page}</Button>
      </ButtonGroup>
    </Box>
  );
}
