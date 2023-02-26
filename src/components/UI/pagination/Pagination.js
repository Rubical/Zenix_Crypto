import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setPage } from "../../../redux/pageCountSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BasicPagination() {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.pagination);

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(e, page) => dispatch(setPage(page))}
        count={totalPages}
        color="primary"
      />
    </Stack>
  );
}
