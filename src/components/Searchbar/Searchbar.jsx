import { PureComponent } from "react";
import { ButtonSearch } from "../Buttons/ButtonSearch";
import { InputValue } from "../InputValue/InputValue";
import { SearchBarS, SearchFormS } from "./Searchbar.styled";
import { toast } from "react-toastify";

export class SearchBar extends PureComponent {
  state = {
    query: "",
  };
  handleQueryChange = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query.trim() === "") {
      toast.error("Empty");
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <>
        <SearchBarS>
          <SearchFormS onSubmit={this.handleSubmit}>
            <ButtonSearch></ButtonSearch>
            <InputValue
              onChange={this.handleQueryChange}
              value={this.state.query}
            ></InputValue>
          </SearchFormS>
        </SearchBarS>
      </>
    );
  }
}
