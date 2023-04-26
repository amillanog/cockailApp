import { BoxInputSearch } from "./StyledSearch";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ onSubmit }) => {
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  };
  return (
    <BoxInputSearch>
      <input
        onKeyUp={submit}
        type="text"
        placeholder={"Look for a drink"}
      />
      <span>
        <FontAwesomeIcon icon={faSearch} className="margin-l-5" />
      </span>
    </BoxInputSearch>
  );
};

export default Search;
