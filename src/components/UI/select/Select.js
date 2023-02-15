import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  options,
  defaultValue,
  value,
  onChange,
}) {
  return (
    <FormControl sx={{ m: 1, width: 150 }} size="small">
      <InputLabel id="demo-select-small">{defaultValue}</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        labelId="demo-select-small"
        id="demo-select-small"
        label="Filter"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
