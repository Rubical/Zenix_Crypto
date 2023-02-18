import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ totalPages, changePage }) {
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(e, num) => changePage(num)}
        count={totalPages}
        color="primary"
      />
    </Stack>
  );
}
