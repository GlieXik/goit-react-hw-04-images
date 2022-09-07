import { useState } from "react";
import { ButtonSearch } from "../Buttons/ButtonSearch";
import { InputValue } from "../InputValue/InputValue";
import { SearchBarS, SearchFormS } from "./Searchbar.styled";
import { toast } from "react-toastify";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Empty");
      return;
    }

    onSubmit(query);

    setQuery("");
  };

  return (
    <>
      <SearchBarS>
        <SearchFormS onSubmit={handleSubmit}>
          <ButtonSearch></ButtonSearch>
          <InputValue onChange={handleQueryChange} value={query}></InputValue>
        </SearchFormS>
      </SearchBarS>
    </>
  );
};
