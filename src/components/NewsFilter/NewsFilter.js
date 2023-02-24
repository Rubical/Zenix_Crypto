import BasicSelect from "../UI/select/Select";
import TextInput from "../UI/input/TextInput";
import cl from "./NewsFilter.module.css";

const NewsFilter = ({ filter, setFilter }) => {
  return (
    <div className={cl.sortContainer}>
      <TextInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <BasicSelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
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
