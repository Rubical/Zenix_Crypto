import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ totalPages, setPage }) {
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(e, page) => setPage(page)}
        count={totalPages}
        color="primary"
      />
    </Stack>
  );
}
