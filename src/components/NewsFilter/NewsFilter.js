import BasicSelect from "../UI/select/Select";
import TextInput from "../UI/input/TextInput";
import cl from "./NewsFilter.module.css";
import { setSortType, setSearchValue } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const NewsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <div className={cl.sortContainer}>
      <TextInput
        value={filter.query}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />
      <BasicSelect
        value={filter.sort}
        onChange={(selectedSort) => dispatch(setSortType(selectedSort))}
        defaultValue="Sort"
        options={[
          { value: "snippet", name: "By title" },
          { value: "lead_paragraph", name: "By description" },
        ]}
      />
    </div>
  );
};

export default NewsFilter;
