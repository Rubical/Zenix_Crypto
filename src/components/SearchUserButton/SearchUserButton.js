import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchUserButton = () => {
  return (
    <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
      <SearchIcon />
    </IconButton>
  );
};

export default SearchUserButton;
