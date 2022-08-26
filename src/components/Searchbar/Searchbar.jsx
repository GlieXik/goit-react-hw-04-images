import { PureComponent } from "react";
import { ButtonSearch } from "../Buttons/ButtonSearch";
import { InputValue } from "../InputValue/InputValue";
import { SearchBarS, SearchFormS } from "./Searchbar.styled";

export class SearchBar extends PureComponent {
  state = {
    query: "",
  };

  render() {
    return (
      <>
        <SearchBarS>
          <SearchFormS>
            <ButtonSearch></ButtonSearch>
            <InputValue></InputValue>
          </SearchFormS>
        </SearchBarS>
      </>
    );
  }
}
