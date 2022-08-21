import { ButtonSearch } from "../Buttons/ButtonSearch";
import { InputValue } from "../InputValue/InputValue";
import { SearchBarS, SearchFormS } from "./Searchbar.styled";

export const SearchBar = () => (
  <>
    <SearchBarS>
      <SearchFormS>
        <ButtonSearch></ButtonSearch>
        <InputValue></InputValue>
      </SearchFormS>
    </SearchBarS>
  </>
);
